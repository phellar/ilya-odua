import React, { useState, useContext } from 'react';
import { SupabaseContext } from '../Context/SupabaseContext';


const Upload = () => {
  const { setFile, uploadImage } = useContext(SupabaseContext);

  // Handle File Input
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}

export default Upload;
