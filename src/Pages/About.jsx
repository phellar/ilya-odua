import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import './About.css'

const About = () => {
  return (
    <>
        <Header/>
        <section className='about'>
             <div className="container">
                <div className="heading-new">
                    <h1>About  <span className='highlight'> Ilya Odua </span></h1>
                </div>

                <div className="about-info">
                    <p>Kegites Club International, Ilya Odua, is a socio-cultural organization in Ekiti State University, 
                        Nigeria. The club's objective is to promote African tradition, culture, 
                        unity, and development among its members within and outside the university community.
                    </p>

                        <div className="ab">
                            <strong>Vision:</strong>
                            <p>
                                Fostering African heritage and promoting academic excellence, social responsibility,
                                and community development within and outside Ekiti State University.
                            </p>
                        </div>

                     <div className="ab">
                        <strong>Mission:</strong>
                        <p>
                            To promote "unity in diversity" among African descent, 
                            developing cultural awareness, educational advancement, 
                            and community service, especially in Èkìtì State.
                        </p>
                     </div>

                     <div className="ab">
                        <strong>Objectives:</strong>
                        <ul>
                            <li>1. Organize African cultural events and festivals - To promote African culture and language.</li>
                            <li>2. Provide academic support and mentorship - Fostering academic excellence and research</li>
                            <li>3. Encourage community service and social responsibility by engaging in charity programs and community development projects</li>
                            <li>4. Facilitate leadership training and workshops by enhancing leadership and entrepreneurial skills among members</li>
                            <li>5. Establish partnerships/collaboration with other African organizations with focus on cultural and traditional heritage preservation.</li>
                            <li>6. Strengthen unity among members, improve awareness to attract and retain new members through re-orientarion and awareness campaigns</li>
                        </ul>
                     </div>
                     
                     <div className="ab">
                        <strong>Membership</strong>
                        <p>Membership is open to all Ekiti State University students and alumni.</p>
                     </div>

                     <div className="ab">
                        <strong>Membership categories</strong>
                        <ul>
                            <li>1. Regular members - at undergraduate level</li>
                            <li>2. Non-Regular members - at graduate, post-graduate and associate level (Fellows, Senior Fellows and Life Senior Fellows)</li>
                            <li>3. Patrons - Grand, Eternal</li>
                        </ul>
                     </div>

                     <div className="ab">
                        <strong>Activities</strong>
                        <ul>
                            <li>1. Annual Transformation Gyration</li>
                            <li>2. Annual Coronation Gyration</li>
                            <li>3. Community service projects (e.g., clean-up exercises, charity events)</li>
                            <li>4. Conferences, seminars and workshops</li>
                            <li>5. Leadership training and mentorship programs</li>
                        </ul>
                     </div>

                        <div className="ab">
                            <strong>Future Plans:</strong>
                            <ul>
                                <li>1. Transform the ILYA OODUA shrine (Kegites Club Building) into a cultural center on EKSU campus</li>
                                <li>2. Collaborate with other identified African and Yoruba organizations locally and  internationally to promote culture and tradition</li>
                                <li>3. Develop a mentorship program for secondary school students</li>
                                <li>4. Host an International Kegites Club Conference on preservation of culture, traditions and unity</li>
                                <li>5. Launch a scholarship program for members</li>
                            </ul>
                        </div>
                </div>
             </div>
        </section>
        <Footer/>
    </>
  )
}

export default About