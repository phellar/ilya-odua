// src/ImageContext.js
import React, { createContext, useEffect, useState } from 'react';
import supabase from '../Config/SupabaseClient';


export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase.storage.from('image').list();
        console.log('All files in bucket:', data);
        if (error) throw error;

        // const urls = await Promise.all(data.map(async (file) => {
        //   const { signedURL, error: urlError } = await supabase.storage
        //     .from('chief-image')
        //     .getPublicUrl(file.name);
        //   if (urlError) throw urlError;
        //   return signedURL;
        // }));

        // setImages(urls);
        // console.log(data);
      } catch (err) {
        console.log('Error:', error);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <ImageContext.Provider value={{ images, loading, error }}>
      {children}
    </ImageContext.Provider>
  );
};
