import React, { useState } from 'react';
import './KegYear.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import supabase from '../Config/SupabaseClient';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const KegYear = () => {


  const [loading, setLoading] = useState(false);

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
    email: '',
    phone: ''
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
  
    const { FullName, portfolio, kegyear, dob, email, phone } = form;
    if (!FullName || !portfolio || !dob || !kegyear || !email || !phone) {
      alert('Please fill all the info');
      return;
    }
  
    try {

      setLoading(true); // Start loading spinner

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
        .from('chief-image')
        .upload(`members/${file.name}`, file); 
  
      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        setLoading(false); // Stop loading spinner
        return;
      }
  
      // Generate the public URL of the uploaded image
      const { data, error: urlError } = supabase
        .storage
        .from('chief-image')
        .getPublicUrl(`members/${file.name}`, file);
  
      if (urlError) {
        console.error('Error getting public URL:', urlError);
        setLoading(false); // Stop loading spinner
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
          picture: data.publicUrl,
          phone
        }]);
  
      if (error) {
        console.error('Error inserting into database:', error);
        setLoading(false); // Stop loading spinner
      } 

  
      notify(); // Show success notification
      setForm({ FullName: '', portfolio: '', kegyear: '', picture: null, dob: '', email: '' });
       
      
      
    } catch (err) {
      console.error('Unexpected error:', err);
    }
    finally {
      setLoading(false); // Stop loading spinner after all actions
    }
  };
  
  
  

  return (
    <>
      <Header />
        
      <section className='keg-year'>
        <div className="container">
          <div className="card-header">
            <h1 className='reg'> <span class="highlight">Ilya Odua</span> Members Registration Page</h1>
            <p className='reg'>Kindly Put in your information for documentation<br /></p>
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
                <label htmlFor="phone">Phone</label>
                <input className='form-Input'
                  placeholder='Phone Number'
                  name="phone"
                  type="number"
                  onChange={handleChange}
                  value={form.phone}
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
                <select id="portfolio" name="portfolio" value={form.portfolio} onChange={handleChange}>
                  <option value="" disabled >Select Portfolio</option>
                    <option value='Chief'>Chief</option>
                    <option value='Elder'>Elder</option>
                    <option value="Fẹda">Fẹda</option>
                    <option value="Parrot">Parrot</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Philosopher">Philosopher</option>
                    <option value="Drumito">Drumito</option>
                    <option value="Songito">Songito</option>
                    <option value="Marshall">Marshall</option>
                    <option value="Fellow">Fellow</option>
                    <option value="Senior Fellow">Senior Fellow</option>
                    <option value="Life Senior Fellow">Life Senior Fellow</option>
                    <option value="Patron">Patron</option>
                    <option value="Grandpatron">Grandpatron</option>
                    <option value="Shriner">Shriner</option>
                    <option value="Transporter">Transporter</option>
                    <option value="Welfarer">Welfarer</option>
                    <option value="Welfaress">Welfaress</option>
                    <option value="Le-Pour">Le-Pour</option>
                    <option value="Tapper">Tapper</option>
                    <option value="Spedu">SPEDU</option>
                    <option value="hod">Head of Drumitos (HOD)</option>
                    <option value="dod">Director of Drumitos (DOD)</option>
                    <option value="hos">Head of Songitos (HOS)</option>
                </select>
              </div>

              <div className="ce">
                <button className='fullBtn' onClick={handleRegister}>
                  {loading ?  <div className="spinner"></div> : 'Register'}
                </button>
              </div>
           
            </div>
            <div className="boxxx-2"></div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default KegYear;
