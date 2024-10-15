import React, { useState } from 'react';
import './KegYear.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import supabase from '../Config/SupabaseClient';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const KegYear = () => {



  const notify = () => {
    toast.success('Information Submitted Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // auto increment of kegyear
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1985 + 1 }, (_, index) => 1985 + index);

  const [form, setForm] = useState({
    FullName: '',
    portfolio: '',
    kegyear: '',
    picture: null,
    dob: '',
    email: ''
  });

  const handleChange = (e) => {
    if (e.target.name === "picture") {
      setForm({ ...form, picture: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // register member
  const handleRegister = async (e) => {
    e.preventDefault();
  
    const { FullName, portfolio, kegyear, dob, email } = form;
    if (!FullName || !portfolio || !dob || !kegyear || !email) {
      alert('Please fill all the info');
      return;
    }
  
    try {
      // Get file from input
      const file = document.querySelector('#picture').files[0];
  
      // Ensure a file is selected
      if (!file) {
        alert('Please upload a picture');
        return;
      }
  
      // Upload the file to the storage bucket
      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('chief-image') // make sure the bucket name is correct
        .upload(`members/${file.name}`, file); // check the path structure
  
      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        return;
      }
  
      // Generate the public URL of the uploaded image
      const { data, error: urlError } = supabase
        .storage
        .from('chief-image')
        .getPublicUrl(`members/${file.name}`, file);
  
      if (urlError) {
        console.error('Error getting public URL:', urlError);
        return;
      }
  
      
  
  
      // Insert form data into the database, including the image URL
      const { ChiefData, error } = await supabase
        .from('cheif')
        .insert([{ 
          FullName, 
          portfolio, 
          kegyear, 
          dob, 
          email, 
          picture: data.publicUrl // Insert the image URL into the "picture" field
        }]);
  
      if (error) {
        console.error('Error inserting into database:', error);
      } 

  
      notify(); // Show success notification
      setForm({ FullName: '', portfolio: '', kegyear: '', picture: null, dob: '', email: '' });
       
      
      
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };
  
  
  

  return (
    <>
      <Header />
      <section className='keg-year'>
        <div className="container">
          <div className="card-header">
            <h1 className='reg'>Members Registration Page</h1>
            <p className='reg'>Kindly Put in your information and the event that<br /> happened when you were a member/chief</p>
          </div>
          <div className='two-form'>
            <div className='form'>
              <div className="form-group">
                <label htmlFor="FullName">Full Name</label>
                <input className='form-Input'
                  placeholder='Enter Your Full Name'
                  id="FullName"
                  name="FullName"
                  type="text"
                  onChange={handleChange}
                  value={form.FullName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className='form-Input'
                  placeholder='Enter Your Email'
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={form.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="kegyear">Keg Year</label>
                <select id="kegyear" name="kegyear" value={form.kegyear} onChange={handleChange}>
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input className='form-Input'
                  id="dob"
                  name="dob"
                  type="date"
                  onChange={handleChange}
                  value={form.dob}
                />
              </div>

              <div className="form-group">
                <label htmlFor="picture">Upload Photo</label>
                <input className='form-Input'
                  id="picture"
                  name="picture"
                  type="file"
                  accept="image/*" 
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="portfolio">Portfolio</label>
                <textarea placeholder='Enter Your Portfolio' id="portfolio"
                  name="portfolio"
                  onChange={handleChange}
                  value={form.portfolio}>
                </textarea>
              </div>

              <div className="ce">
                  
                <button className='fullBtn' onClick={handleRegister}>
                  Submit
                  </button>
              </div>
            </div>
            <div className="box-2"></div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default KegYear;
