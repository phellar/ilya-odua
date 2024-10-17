import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section class="contact">
     <div class="container">
      <div className="contact-box">
       <h2>Contact Us</h2>
         <p>Please reach out to us via any of the channel below</p>
            <div className="split">
                <div className="contact-info">
                <h5>Hot Link</h5>
                  <div className="small-card">
                    <MdEmail />
                    <p>admin@kegitesclub.com</p>
                  </div>
                  <div className="small-card">
                    <MdPhone /> 
                    <p>08000000000000000</p>
                  </div>
                  <div className="small-card">
                    <FaLocationDot />
                    <p>Ekiti State University</p>
                  </div>
                </div>
             
              <div className="social">
                  <h5>Social media</h5>
                <div className="small-card">
                  <div className="icon-box">
                    <FaFacebook />
                  </div>
                    <p>@kegiteclubilyaodu</p>
                  </div>
                  <div className="small-card">
                    <div className="icon-box">
                      <FaInstagramSquare />    
                    </div>
                    <p>@kegiteclubilyaodu</p>
                  </div>
                  <div className="small-card">
                    <AiFillTikTok />
                    <p>@kegiteclubilyaodu</p>
                  </div>
                  <div className="small-card">
                    <FaYoutube />
                    <p>@kegiteclubilyaodu</p>
                  </div>
              </div>
            

            </div>
        </div>
      </div>
    </section>


  )
}

export default Contact