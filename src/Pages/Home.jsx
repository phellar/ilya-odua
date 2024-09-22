import React from 'react'
import Header from '../Component/Header'
import FAQ from '../Component/FAQ'
import Footer from '../Component/Footer'
import './Home.css'
import { Link } from 'react-router-dom'
// import Baba from '../assets/baba.jpg'


const Hero = () => {



  return (

    <>
    <Header/>
      <section className='hero-section' >
          <div className="over">
            <div className="container">
                <div className="wrapper">
                        <h1>Welcome to SUPREMOST KEGITES CLUB INTERNATIONAL</h1>
                        <h2 class="head-1">ILYA ODUA</h2>
                        <p>The Fountain of Karability</p>
                          <div class="cta">
                            <Link to='/' className='CTA'>Learn More</Link>
                            <Link to='/' className='out-btn'>Hemisphere</Link>
                          </div>
                      </div>
                      
                </div>
            </div>
      </section>

      <section class="history">
              <div class="container">
                  <div class="two-box">
                    <div class="info">
                      <h1>History of The <span class="highlight">Kegites Club</span></h1>
                      <p>The Kegites Club, erstwhile known as The Palmwine Drinkerds Club is the most popular socio-cultural club in Africa. The club originated from the University of Ife (now known as Obafemi Awolowo University), it was formally formed in 1962 by a group of students of the then College of Arts and Science Ibadan
                         later upgraded to become University of Ife. It was formed at the institution’s old temporary
                          site which is the current campus of The Polytechnic Ìbàdàn.</p>
                            <div class="cta">
                            <Link to='/' className='CTA'>Read More</Link>
                            </div>
                    </div>
                    {/* <img src={} alt="" /> */}
                    <div className="img-new"></div>
                  </div>
              </div>

              
            </section>


            {/* <!-- WHY JOIN KEGITES --> */}
             <section class="join">
              <div className="container">
                  <div class="heading">
                    <h1>Why Join <span class="highlight">Kegites Club</span> ?</h1>
                    <p>Benefits as a member (kuta or comrad)</p>

                  </div>
                  <div className="two-box">
                    <div className="card-wrapper">
                      <div className="icon">
                        <i className='fa fa-handshake-o' class="ic"></i>
                      </div>
                      <h3>Networking opportunities</h3>
                      <small>Kegites Club provides a platform for members to connect with fellow professionals and 
                        like-minded individuals, potentially leading to valuable connections and collaborations.</small>
                      </div>
                      
                      <div class="card-wrapper">
                        <div class="icon">
                          <i class='fa fa-line-chart' className="ic"></i>
                        </div>
                      <h3>Social events</h3>
                      <small>Kegites Club organizes various social events, such as parties, gatherings, and outings, 
                        providing a chance for members to relax, have fun, and bond with fellow members.</small>
                    </div>

                    <div class="card-wrapper">
                      <div class="icon">
                        <i class='fa fa-line-chart' className="ic"></i>
                      </div>
                      <h3>Personal development</h3>
                      <small>The club offers opportunities for members to develop new skills, attend seminars, and 
                        participate in workshops, contributing to their personal growth and self-improvement.</small>
                    </div>

                  </div>
              </div>
             </section>


            {/* <!-- ILYA ODUA HISTORY --> */}
            <section class="history" id="ilya-history">
              <div class="container">
                  <div class="two-box">
                    <div class="img-2"></div>
                    <div class="info">
                      <h1> Brief History of <span class="highlight">Ilya Odua</span></h1>
                      <p>There is no river without a source, every river flows from a fountain, just as every tree was once a seed. 
                        Ilya Odua was the mustard seed planted many decades ago, but today has become an oak</p>
                            <div class="cta">
                              <Link to='/history-ilya-Odua' className='CTA'>Read More</Link>
                            </div>
                    </div>
                  </div>
              </div>
            </section>


            {/* <!-- OUR GALLERY--> */}
            <section class="gallery">
              <div class="container">
                <div class="heading">
                  <h1>Our Gallery</h1>
                  <p>Here are few pictures from our gyration activities</p>
                </div>
                <div class="card-group">
                    <div class="card-1"></div>
                    <div class="card-2"></div>
                    <div class="card-3"></div>
                </div>
                  <div class="ce">
                    <Link to='/' className='CTA'>View More</Link>
                  </div>
              </div>
            </section>


            <FAQ/>
            <Footer/>






    </>
  )
}

export default Hero