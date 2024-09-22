import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'


const Patrons = () => {
  return (
    <>
      <Header/>
      <section>
        <div className="container">
          <div className="heading">
          <h1> <span className='highlight'> Ilya Odua </span> Patrons</h1>        
        </div>
            <div className="card-group-new">
                <div className="lord-card">
                  <div className="lord-img">
                    <img src="https://mpfxcjjgxqjenjxhiwju.supabase.co/storage/v1/object/public/image/patrons/YEVI0876.JPG" alt="" />
                  </div>
                  <div className="card-desc">
                    <h2 className='highlight-new'>Rotimi Adedayo</h2>
                    <h3>Year of patronization: 1990</h3>
                    <h3>Patronized by: Chief Akomolafee Taiwo Messiah</h3>
                  </div>
                </div>
                <div className="lord-card">
                  <div className="lord-img">
                    <img src="https://mpfxcjjgxqjenjxhiwju.supabase.co/storage/v1/object/public/image/patrons/AYAG9283.JPG" alt="" />
                  </div>
                  <div className="card-desc">
                    <h2 className='highlight-new'>Patron Kayode Jimoh Richard</h2>
                    <h3>Year of patronization: 2024</h3>
                    <h3>Patronized by: Chief Olajuyin Sunday</h3>
                  </div>
                </div>
                <div className="lord-card">
                  <div className="lord-img">
                    <img src="https://mpfxcjjgxqjenjxhiwju.supabase.co/storage/v1/object/public/image/patrons/QIPL6001.JPG" alt="" />
                  </div>
                  <div className="card-desc">
                    <h2 className='highlight-new'>Precious Akinpelumi Iluku</h2>
                    <h3>Year of patronization: 2014</h3>
                    <h3>Patronized by: Chief Ajibade Mattew (Skul boi)</h3>
                  </div>
                </div>
                <div className="lord-card">
                  <div className="lord-img">
                    <img src="https://mpfxcjjgxqjenjxhiwju.supabase.co/storage/v1/object/public/image/patrons/RFIL8049.JPG" alt="" />
                  </div>
                  <div className="card-desc">
                    <h2 className='highlight-new'>Adetola Ademola</h2>
                    <h3>Patronized by: Oriade 1</h3>
                    {/* <h3>Patronized by: Chief Ajibade Mattew (Skul boi)</h3> */}
                  </div>
                </div>

            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Patrons