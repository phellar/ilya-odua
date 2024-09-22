import { useEffect, useState } from 'react';
import supabase from '../Config/SupabaseClient';

const Image = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
     
      
      // Replace 'bucket-name' and 'folder-name' with actual values
      const { data, error } = await supabase.storage.from('image').list('pictures/', {
        limit: 100, 
      });

      // Log the response to debug
      console.log('Data:', data);
      console.log('Error:', error);
      

      if (error) {
        console.error('Error fetching images:', error.message);
        return;
      }

      if (data && data.length > 0) {
        const imageUrls = data.map((file) => {
          const  {publicURL}  = supabase
          .storage
            .from('image')
            .getPublicUrl(`pictures/${file.name}`);
           
          return publicURL;
          ;
        });
        console.log(publicURL)
        setImages(imageUrls);
       
      } else {
        console.warn('No files found in the folder.');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-gallery">
        {images.length > 0 ? (
          images.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index}`} width="200" />
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
};

export default Image;
