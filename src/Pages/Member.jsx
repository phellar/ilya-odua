import React from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../Config/SupabaseClient';
import { useState, useEffect } from 'react';
import Spinner from '../Component/Shred/Spinner';
import './Member.css'
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Member = () => {

    const { id } = useParams(); 
  const [item, setItem] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    const fetchItem = async () => {
      const { data, error } = await supabase
        .from('cheif') 
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setItem(data);
      }
    };

    fetchItem();
  }, [id]);

  if (!item)  return <div className='spin'><Spinner/></div>
  

  return (
    <>
    <Header/>
       <section className='details'>
        <div className="container">
            <div className="cardd">
                    <div className="details-info">
                        <div className="side-1">
                            <div className="img-circle">
                                <img src={item.picture} alt="picture" />
                            </div>
                            
                        </div>
                        <div className="side-2">
                        <h1 className='port'>{item.FullName}</h1>
                        <p className='port'>{item.portfolio}</p>
                        <br/>
                        <p className='port'>Keg year : {item.kegyear}</p>
                        <br/>
                        {/* <p>Birthday: {item.dob}</p> */}
                        </div>
                    </div>
                
                
                   
                </div>
                
            </div>
    
      
        </section>
        <Footer/>
    </>
  )
}

export default Member