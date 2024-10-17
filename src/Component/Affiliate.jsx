import React from 'react'
import './Affiliate.css'
import { Link } from 'react-router-dom'

const Affiliate = () => {
  return (
    <>
        <section className='aff'>
            <div className="container">
                    <div className="contact-box">
                    <h2 className='aff-head'>Affiliate of<span class="highlight">Ilya Odua</span></h2>
                        <div className="card-group-new">

                            <Link to='https://maps.app.goo.gl/MUkJ5m5G57xDAuKT7' target='blank'>
                            <div  id='arewa-img-1'>
                                    <div className="image-overlay"> 
                                    <h2>Achaivarian Hub Fajuyi Park, Ado - Ekiti</h2>
                                    </div>
                            </div>
                            </Link>
                        
                            <Link to='' target='blank'>
                            <div  id='arewa-img'>
                                    <div className="image-overlay"> 
                                        <h2>Arewa Odua</h2>
                                    </div>
                            </div>
                            </Link>

                            <Link to='' target='blank'>
                            <div  id='arewa-img-3'>
                                    <div className="image-overlay"> 
                                    <h2>Aayewa Convergence, Ado - Ekiti</h2>
                                    </div>
                            </div>
                            </Link>

                            <Link to='https://maps.app.goo.gl/MUkJ5m5G57xDAuKT7' target='blank'>
                            <div  id='arewa-img-4'>
                                    <div className="image-overlay"> 
                                    <h2>Harmattan Convergence, Oye-Ekiti</h2>
                                    </div>
                            </div>
                            </Link>


                        </div>
                    </div>               
            </div>
        </section>
    </>
  )
}

export default Affiliate