import React from 'react'
import './Features.css'
import Security from '../assets/security.png'
import Analytics from '../assets/analytics.png'
import Pie from '../assets/pie.png'

const Features = () => {
  return (
    <section className='features'>
        <div className="container">
            <div className="content-box">
                    <h2 className='heading'>What do we offer?</h2>
                    <div className="content">
                        <div className="content-info">
                                <div className="shadow">
                                 <img src={Security} alt=""  width={25}/>
                                </div>
                                    <div className="">
                                        <h3>Security Guarantee</h3>
                                        <small>Your data and funds will be securely protected.</small>
                                    </div>
                        </div>
                                <div className="content-info">
                                        <div className="shadow">
                                        <img src={Pie} alt=""  width={25}/>
                                        </div>
                                            <div className="">
                                                <h3>Investing</h3>
                                                <small>Your data and funds will be securely protected.</small>
                                            </div>
                                </div>
                                        <div className="content-info">
                                                <div className="shadow">
                                                <img src={Analytics} alt=""  width={25}/>
                                                </div>
                                                    <div className="">
                                                        <h3>Multiple Method</h3>
                                                        <small>Your data and funds will be securely protected.</small>
                                                    </div>
                                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Features