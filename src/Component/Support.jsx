import React from 'react'
import './Support.css'
import { CiBank } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Bs123 } from "react-icons/bs";

const Support = () => {
  return (
   <>   
    <section className='sup'>
        <div className="container">
                <h1>Want to support the <span className='highlight'> Ilya ? </span></h1>
                <div className="bank">
                    <div className="det">
                            <div className="icon-box-new">
                                <Bs123 />
                            </div>
                            <div className="">
                                <h2>Account Number:</h2>
                                <h3>0267563700</h3>        
                            </div>
                    </div>
                    <div className="det">
                        <div className="icon-box-new">
                            <FaUser /> 
                        </div>
                        <div className="">
                            <h2>Account Name:</h2>
                            <h3>Ilya Odua</h3>
                        </div>
                    </div>
                    <div className="det">
                        <div className="icon-box-new">
                            <CiBank />
                        </div>
                        <div className="">
                            <h2> Bank Name: </h2>
                            <h3>Wema Bank</h3>
                        </div>
                    </div>

                </div>
                
        </div>
    </section>
   </>
  )
}

export default Support