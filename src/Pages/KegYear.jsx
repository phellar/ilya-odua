import React, { useState } from 'react'
import './KegYear.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify'
import supabase from '../Config/SupabaseClient'
import Header from '../Component/Header'
import Footer from '../Component/Footer'





const KegYear = () => {

const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1985 + 1 }, (_, index) => 1985 + index);
 

//   register chief
 const handleRegister = async(e)=>{
    
       // validate if form field is empty 
       const {FullName,portfolio,kegyear,picture,dob,email} = form;
    if(!FullName || !portfolio || !picture || !dob || !kegyear || !email ){
        alert('please fill all the info');
    } 
    
    else{
        
        const {data,error} = await supabase
        .from('cheif')
        .insert([{FullName, portfolio,kegyear,dob,email}])
       
    




        if(error){
            console.log(error);
        }
    
        if(data){
            console.log(data)
        }
        setForm({
            FullName: '',
            portfolio: '',
            kegyear: '',
            picture: '',
            dob: '',
            email:' '
        }) 
        notify();
    }


    // function to handle uploading of image to database

    const handleUpload = async()=>{
       

        if (error) {
            console.error('Error uploading file:', error);
          } else {
            console.log('File uploaded successfully:', data);
          }
    }
// /////////////////////////////////////////////////////////////////////



    e.preventDefault();
    // console.log(form);
 }

//  Show notification after Submitting the form 
const notify = ()=>{
    toast.success('Information Submitted Successfuly!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}



 const[form,setForm] = useState({
    FullName: '',
    portfolio: '',
    kegyear: '',
    picture: '',
    dob: '',
    email:' '   
});

const handleChange = (e)=>{
  setForm({... form, [e.target.name]: e.target.value});
}




  return (
    <>
    <Header/>
    <section className='keg-year'>
        <div className="container">
            <div className="card-header">
                <h1>Chief Registration Page</h1>
                <p>Kindly Put in your information and the event that
                    <br/> happened when you were a chief</p>
            </div>
            <div className='two-form'>
            <div className='form'>
                        <div className="form-group">
                                        <label htmlFor="">Full Name</label>
                                        <input  className='form-Input'
                                        placeholder='Enter Your Full Name'
                                        id="FullName"
                                        name="FullName"
                                        type="text"
                                        onChange={handleChange}
                                        value={form.FullName}
                                        />    
                        </div>

                        <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input  className='form-Input'
                                    placeholder='Enter Your Email'
                                    id="FullName"
                                    name="email"
                                    type="text"
                                    onChange={handleChange}
                                    value={form.email}
                                    />   
                                </div>

                            <div className="first-box">
                                <div className="form-group">
                                        <label htmlFor="">Keg Year</label>
                                        <select id="kegyear" name="kegyear" value={form.kegyear} onChange={handleChange}>
                                        <option value="">Select Year</option> {/* Option for no selection */}
                                        {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                        ))}
                                    </select>
                                    </div>
                                <div className="form-group">
                                    <label htmlFor="">Date of Birth</label>
                                    <input  className='form-Input'
                                    // placeholder='Enter Your Email'
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    onChange={handleChange}
                                    value={form.dob}
                                    />   
                                </div> 
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Upload Photo</label>
                                <input  className='form-Input'
                                // placeholder='Enter Your Portfolio'
                                id="picture"
                                name="picture"
                                type="file"
                                onChange={handleChange}
                                // onChange={handleFileChange}
                                value={form.picture}
                                />   
                            </div>

                            <div className="form-group">
                                    <label htmlFor="">Portfolio</label>
                                    <textarea placeholder='Enter Your Portfolio'id="portfolio"
                                    name="portfolio"
                                    type="textarea"
                                    onChange={handleChange}
                                    value={form.portfolio}>

                                    </textarea>  
                            </div>


                            <div className="ce">
                                <button className='fullBtn' onClick={handleRegister}>Register</button>
                            </div>
                    </div>
                    <div className="box-2"></div>
            </div>

        </div>
    </section>
    <Footer/>
    <ToastContainer/>
    </>


  )
}

export default KegYear