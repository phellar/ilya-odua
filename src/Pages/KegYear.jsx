import React, { useState } from 'react';
import './KegYear.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import supabase from '../Config/SupabaseClient';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const KegYear = () => {

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1985 + 1 }, (_, index) => 1985 + index);
    const [form, setForm] = useState({
        FullName: '',
        portfolio: '',
        kegyear: '',
        picture: '',
        dob: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "picture") {
            setForm({ ...form, picture: files[0] }); // Set the selected file
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const { FullName, portfolio, kegyear, picture, dob, email } = form;
        if (!FullName || !portfolio || !picture || !dob || !kegyear || !email) {
            alert('Please fill all the info');
            return;
        }

        // Upload the image file
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('image') // Your Supabase bucket name
            .upload(`pictures/${Date.now()}_${picture.name}`, picture); // Unique filename

        if (uploadError) {
            console.error('Error uploading file:', uploadError);
            return;
        }

        // Get the public URL of the uploaded image
        
        const { publicURL } = supabase
            .storage
            .from('image')
            .getPublicUrl(uploadData.path);
            
            
           


        // Insert the form data along with the public URL into the database
        const { data, error } = await supabase
            .from('cheif')
            // .insert([{ FullName, portfolio, kegyear, dob, email, picture: publicURL }]);
            .insert([{ FullName: FullName, portfolio, kegyear, dob, email, picture: publicURL }]);
            
             if (data) {
                console.log('Data inserted:', data);
                notify(); // Show success notification
                setForm({ FullName: '', portfolio: '', kegyear: '', picture: '', dob: '', email: '' });
                    }

                else{
                    console.log('Error inserting into database:', error);
                }

       
        
        console.log('Image Path:', uploadData.path); // Log the image path
        

        // Show notification after submitting the form 
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

    };

    return (
        <>
            <Header />
            <section className='keg-year'>
                <div className="container">
                    <div className="card-header">
                        <h1>Chief Registration Page</h1>
                        <p>Kindly Put in your information and the event that
                            <br /> happened when you were a chief</p>
                    </div>
                    <div className='two-form'>
                        <div className='form'>
                            <div className="form-group">
                                <label htmlFor="">Full Name</label>
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
                                <label htmlFor="">Email</label>
                                <input className='form-Input'
                                    placeholder='Enter Your Email'
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    value={form.email}
                                />
                            </div>


                                <div className="form-group">
                                    <label htmlFor="">Keg Year</label>
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
                                    <label htmlFor="">Date of Birth</label>
                                    <input className='form-Input'
                                        id="dob"
                                        name="dob"
                                        type="date"
                                        onChange={handleChange}
                                        value={form.dob}
                                    />
                                </div>
                            

                            <div className="form-group">
                                <label htmlFor="">Upload Photo</label>
                                <input className='form-Input'
                                    id="picture"
                                    name="picture"
                                    type="file"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Portfolio</label>
                                <textarea placeholder='Enter Your Portfolio' id="portfolio"
                                    name="portfolio"
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
            <Footer />
            <ToastContainer />
        </>
    );
};

export default KegYear;
