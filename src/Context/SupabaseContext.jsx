import React, { createContext, useState, useEffect } from 'react';
import supabase from '../Config/SupabaseClient';


// Create the context
export const SupabaseContext = createContext();

// Context provider component
export const SupabaseProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const [imageUrls, setImageUrls] = useState([]); // Array to hold URLs of all images

  // Upload Image to Supabase
  const uploadImage = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    const { data, error } = await supabase.storage
      .from('chief-image') // Replace with your bucket name
      .upload(`public/${file.name}`, file);

    if (error) {
      console.error('Error uploading file:', error.message);
    } else {
      console.log('File uploaded:', data);
      fetchAllImages(data.path); // Fetch all images after uploading
    }
  };


  // Fetch all images from the bucket
  const fetchAllImages = async (filePath) => {
    const { data, error } = await supabase
      .storage
      .from('your-bucket-name') // Replace with your bucket name
      .getPublicUrl(filePath);

    if (error) {
      console.error('Error fetching image:', error.message);
    } else {
      setImageUrls(data.publicUrl);
      console.log(imageUrls);
    }
    // const { data, error } = await supabase.storage
    //   .from('chief-image') // Replace with your bucket name
    //   .getPublicUrl(filePath);

    // if (error) {
    //   console.error('Error listing files:', error.message);
    // } else {
        
    //   const urls = await Promise.all(
    //     data.map(async (file) => {
    //       const { data: urlData } = supabase.storage
    //         .from('chief-image')
    //         .getPublicUrl(`public/${file.name}`); // Replace with folder path if applicable
    //       return urlData.publicUrl;
    //     })
    //   );
    //   setImageUrls(data.publicUrl); // Store all the image URLs in state
    //   console.log(imageUrls)
    // }
  };

  // Automatically fetch all images on component mount
  useEffect(() => {
    fetchAllImages();
  }, []);

  return (
    <SupabaseContext.Provider value={{ file, setFile, imageUrls, uploadImage }}>
      {children}
    </SupabaseContext.Provider>
  );
};
