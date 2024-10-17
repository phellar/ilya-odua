import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Component/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import KegYear from './Pages/KegYear'
import Lord from './Pages/Lord'
import Patrons from './Pages/Patrons'
import HistoryIlyaOdua from './Pages/HistoryIlyaOdua'
import ChiefsisChronology from './Pages/ChiefsisChronology'
import Upload from './Pages/Upload'
import Gallery from './Pages/Gallery'
import Hemisphere from './Pages/Hemisphere'
import Member from './Pages/Member'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import MembersList from './Pages/MembersList'
import About from './Pages/About'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";



function App() {
  
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(()=> {

    const tl_1 = gsap.timeline({});
    const tl_2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll", // The section that triggers the animation
        start: "top center", // Start the animation when the top of the section is at 80% of the viewport
        // toggleActions: "play none none reverse", // Play on enter, reverse on exit
  }});


    

    // tl_1.from(".wrapper", {
    //   x: 500,
    //   duration: 2
    // })

    // tl_2.from(".info-new",{
    //   x: -1000,
    //   duration: 2
    // })
    // tl_2.from(".heading",{
    //   x: -1000,
    //   duration: 2
    // })

    // tl_2.from(".card-wrapper",{
    //   opacity:0,
    //   y: 50,
    //   duration: 2
    // },2)
    // tl_2.from(".card-group",{
    //   opacity:0,
    //   y: 50,
    //   duration: 2
    // },2)

    // tl_2.from(".img-new",{
    //   x: 11000,
    //   duration: 2
    // })

  });



    // // Function to set up animations
    // const setupScrollAnimations = () => {
    //   // Select all sections you want to animate
    //   const sections = document.querySelectorAll(".scroll");
  
    //   sections.forEach((section) => {
    //     gsap.fromTo(
    //       section,
    //       {
    //         opacity: 0,
    //         x: -100, // Start slightly off-screen to the left
    //         rotation: -10, // Slight rotation for the roll effect
    //       },
    //       {
    //         opacity: 1,
    //         x: 0,
    //         rotation: 0, // End in the normal position
    //         duration: 1, // Duration of the animation
    //         scrollTrigger: {
    //           trigger: section, // Each element is the trigger
    //           start: "top 80%", // Start when the top of the element hits 80% of the viewport
    //           toggleActions: "play none none reverse", // Play on enter, reverse on exit
    //         },
    //       }
    //     );
    //   });
    // };
  
    // // Initialize animations when component mounts
    // React.useEffect(() => {
    //   setupScrollAnimations();
    // }, []);


  

  return (
    <div className="overlay">
     
        <Router>
          <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path= "/kegYear" element={<KegYear/>} />
          <Route path= "/chiefsischronology" element={<ChiefsisChronology/>} />
          <Route path= "/lord" element={<Lord/>} />
          <Route path= "/patrons" element={<Patrons/>} />
          <Route path= "/history-ilya-Odua" element={<HistoryIlyaOdua/>} />
          <Route path= "/upload" element={<Upload/>} />
          <Route path= "/gallery" element={<Gallery/>} />
          <Route path= "/hemisphere" element={<Hemisphere/>} />
          <Route path= "/member/:id" element={<Member/>} />
          <Route path= "/members/:kegYear" element={<MembersList />} />
          <Route path= "/about" element={<About />} />
         
          </Routes> 
        </Router>

      
    </div>
  )
}

export default App

