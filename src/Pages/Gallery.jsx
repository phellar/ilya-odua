import React, { useContext } from 'react';
import { SupabaseContext } from '../Context/SupabaseContext';
import Induction from '../Component/Induction';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Ressurection from '../Component/Ressurection';
import './Gallery.css'

const Gallery = () => {
  const { imageUrls } = useContext(SupabaseContext);

  return (
    <>
    <Header/>
    <div>
      <div className="container">
        <div className="headdd">
      <h1 className='hhhhhhhh'>Welcome to <span className='highlight'>Ilya Odua</span> Gallery Page</h1>
      <p>A Glimpse of Our World in Pictures</p>
        </div>
      <br/>
        <Ressurection/>
        <Induction/>
        <br/>
        {/* imageUrls.map((item)) */}
      </div>
    </div>
    <Footer/>
    </> 
  );
};

export default Gallery;
