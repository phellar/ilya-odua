import React, { useState } from 'react'
import { FaPlus, FaMinus} from "react-icons/fa";
import './Hemisphere.css'
import Header from '../Component/Header'

const Hemisphere = () => {

  
  const [isToggled1, setIsToggled1] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [isToggled3, setIsToggled3] = useState(false);
  const [isToggled4, setIsToggled4] = useState(false);
  const [isToggled5, setIsToggled5] = useState(false);
  const [isToggled6, setIsToggled6] = useState(false);
  const [isToggled7, setIsToggled7] = useState(false);
  const [isToggled8, setIsToggled8] = useState(false);
  const [isToggled9, setIsToggled9] = useState(false);
  const [isToggled10, setIsToggled10] = useState(false);
  const [isToggled11, setIsToggled11] = useState(false);

  const handleToggle1 = ()=>{
    setIsToggled1(!isToggled1);
}
const handleToggle2 = ()=>{
    setIsToggled2(!isToggled2);
}
const handleToggle3 = ()=>{
    setIsToggled3(!isToggled3);
}
const handleToggle4 = ()=>{
    setIsToggled4(!isToggled4);
}
const handleToggle5 = ()=>{
    setIsToggled5(!isToggled5);
}
const handleToggle6 = ()=>{
    setIsToggled6(!isToggled6);
}
const handleToggle7 = ()=>{
    setIsToggled7(!isToggled7);
}
const handleToggle8 = ()=>{
    setIsToggled8(!isToggled8);
}
const handleToggle9 = ()=>{
    setIsToggled9(!isToggled9);
}
const handleToggle10 = ()=>{
    setIsToggled10(!isToggled10);
}
const handleToggle11 = ()=>{
    setIsToggled11(!isToggled11);
}












  return (
    <>
        <Header/>
        <section className='hem'>
            <div className="container">
            <div class="hem-box">
                <h1>The <span class="highlight">Kegites Club </span>Hemisphere</h1>
                <p> Here are list of The kegites club and their location </p>
            </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">EKO</span> HEMISPHERE</h1>
                        {isToggled1 ? 
                        
                        <ul>
                            <li>
                            ILYA du TECCO ( Yaba school of Technology)
                        </li>
                        <li>
                            ILYA du LAGOON (University of Lagos, Akoka.)
                            
                        </li>
                        <li>
                            ILYA du AKETE (Lagos State University, Ojoo.)
                        </li>
                          <li>ILYA du LACOED (Lagos State University of Education, Ijanikin.)</li>
                            
                            <li>
                                ILYA du SHARK (Institute of Oceanography and Marine, VI Lagos.)
                            </li>
                            <li>
                                ILYA du LASCOHET (Lagos State College of Health)
                            </li>
                            <li>
                                Ilya Du PEN (Nigeria Institute of Journalism, Ogba)
                            </li>
                        
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled1 ? <p onClick={handleToggle1}><FaMinus /></p> : <p onClick={handleToggle1}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">OGUN</span> HEMISPHERE</h1>
                        {isToggled2 ? 
                        
                        <ul>
                          <li>
                        ILYA du Olumo (Moshood Abiola Polytechnic, Abeokuta.)
                    </li>
                    <li>
                        Ilya du Oronna (Federal Polytechnic, Ilaro.)
                    </li>
                    <li>
                        Ilya du Fatika (Federal College of Education, Abeokuta, Osiele.)     
                    </li>
                        Ilya du Meleki (Onabanjo Olabisi University, Ago Iwoye.)
                    <li>
                        Ilya du Lisabi  (Federal University of Agriculture, Abeokuta.)
                    </li>
                    <li>
                        Ilya du Moromoji (Tai Solarin University of Education, Ijagun)
                    </li>
                    <li>
                        Ilya Molusi (Abraham Adesanya Polytechnic, Ijebu Igbo.)
                    </li>
                    <li> Ilya Ogun (Tai Solarin College of Education, Ijebu Ode.)
                    </li>
                        
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled2 ? <p onClick={handleToggle2}><FaMinus /></p> : <p onClick={handleToggle2}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">OSUN</span> HEMISPHERE</h1>
                        {isToggled3 ? 
                        
                        <ul>
                            <li>
                        Ilya Du Mountain (Osun State College of Technology, Esa-Oke.)
                    </li>
                    <li>
                        Ilya Du Ula
                        (College of Education, Ila-Orangun.)                        
                    </li>
                    <li>
                        Ilya Du Onion
                        (Osun State Polytechnic, Iree)                        
                    </li>
                    <li>
                        Ilya Du Chalk (University of Education, Ilesa)
                    </li>
                        
                    <li>
                        Ilya Du Agbale 
                        (Federal Polytechnic, Ede)                        
                    </li>
                    <li>
                        Ilya Du Healtheco 
                        (School of Health Tech, Ilesa)                        
                    </li>
                    <li> World Headquarters 
                        (Obafemi Awolowo University, Ile-Ife)
                        
                    </li>
                        
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled3 ? <p onClick={handleToggle3}><FaMinus /></p> : <p onClick={handleToggle3}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">OYO</span> HEMISPHERE</h1>
                        {isToggled4 ? 
                        
                        <ul>
                         <li>
                        National Headquarters
                        (University of Ibadan)
                        
                    </li>
                    <li>
                        Ilya Du Poly Mother Shrine (The Polytechnic, Ibadan.)                     
                    </li>
                    <li>
                        Ilya Du Sped
                       (Federal College of Education ‘SPECIAL’)   
                    </li>
                    <li>
                        Ilya Du Survey (Federal School of Surveying, Oyo.)

                    </li>
                        
                    <li>
                        Ilya Du Moor (Federal College of Agriculture Moor Plantation, Ibadan.)
                       
                    </li>
                    <li>
                        Ilya Du Atiba (Emmanuel Alayande University of Education)
                    </li>
                    <li> Ilya Du Akolu 
                        (Adeseun Ogundoyin Polytechnic, Eruwa)                        
                    </li>
                    <li> Ilya Du Asabari
                        (The Oke Ogun Polytechnic, Saki)                                           
                    </li>
                    <li> Ilya Du Kakanfo
                        (Ladoke Akintola University of Technology, Ogbomoso)                                                
                    </li>
                    <li> Ilya Du Timber
                        (Federal School of Forestry, Ibadan)
                                                                   
                    </li>
                    <li> Ilya Du Twins
                        (Oyo State College of Agriculture, Igbo Ora.)                                                                       
                    </li>
                        
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled4 ? <p onClick={handleToggle4}><FaMinus /></p> : <p onClick={handleToggle4}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">ONDO</span> HEMISPHERE</h1>
                        {isToggled5 ? 
                        
                        <ul>
                           <li>
                        Ilya Odua
                        (Ekiti State University, Ado-Ekiti)                                           
                    </li>
                    <li>
                        Ilya Olosunta (Bamidele Olumilua University of Science and Technology, Ikere-Ekiti)                   
                    </li>
                    <li>
                        IIlya Fedeco 2/3 
                        (Federal Poly, Ado-Ekiti)                                         
                    </li>
                    <li>
                        Ilya Du Hill (Adekunle Ajasin University, Akungba)
                    </li>
                        
                    <li>
                        Ilya Imade
                        (Rufus Giwa Polytechnic, Owo)                                         
                    </li>
                    <li>
                        Ilya Ondo (Adeyemi University of Education, Ondo)
                    </li>
                    <li> Ilya Oyemekun
                        (Federal University of Technology, Akure)                                                
                    </li>
                    <li> Ilya Du Tractor 
                        (Federal College of Agriculture, Akure)                                                                   
                    </li>
                        
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled5 ? <p onClick={handleToggle5}><FaMinus /></p> : <p onClick={handleToggle5}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">KWARA</span> HEMISPHERE</h1>
                        {isToggled6 ? 
                        
                        <ul>
                        <li>
                          Ilya Du Potato
                          (Federal Poly, Offa.)                                                                 
                      </li>
                    <li>
                        Ilya Kwateco  (Kwara State Polytechnic, Ilorin)                  
                    </li>
                    <li>
                        Ilya Afonja
                        (Kwara State College of Education, Ilorin)                                           
                    </li>
                    <li>
                        Ilya Du UNILORIN
                        (University of Ilorin)
                    </li>
                        
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled6 ? <p onClick={handleToggle6}><FaMinus /></p> : <p onClick={handleToggle6}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">EDO</span> HEMISPHERE</h1>
                        {isToggled7 ? 
                        
                        <ul>
                        <li>
                        Ilya Du VHF
                        (College of Education, Ekiadolor)                                                           
                    </li>
                    <li>
                        Ilya Du BENSU (Ambrose Alli University, Ekpoma)
                    </li>
                    <li>
                        Ilya Ovia  (University of Benin)                                         
                    </li>
                    <li>
                        Ilya Awure (Edo State Polytechnic, Usen)
                    </li>
                    <li>
                        Ilya Du Poly (The Polytechnic, Auchi)
                    </li>
                        
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled7 ? <p onClick={handleToggle7}><FaMinus /></p> : <p onClick={handleToggle7}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">DELTA</span> HEMISPHERE</h1>
                        {isToggled8 ? 
                        
                        <ul>
                        <li>
                        Ilya Du Mickey Ocean (Delta State Polytechnic, Otefe)
                                                           
                    </li>
                    <li>
                        Ilya Du Terra (Delta State Polytechnic, Ogwashi-Uku)

                    </li>
                    <li>
                        Ilya Du DESPO (Delta State Polytechnic, Ozoro)                 
                    </li>
                    <li>
                        Ilya Du Bishop
                        (Delta State University, Abraka.)                        
                    </li>
                        <li>
                            Ilya Du Excess
                            (Petroleum Training Institute, Warri.)                        
                        </li>
                        <li>
                            Ilya DU CEDAG (College of Education, Agbor.)
                        
                        </li>
                        <li>
                            Ilya Du Asanwai (Delta State University, AIWAN CAMPUS)  
                        </li>
                        <li>
                            Ilya Du EDUKEGGERS (College of Education, Warri.) 
                        </li>
                        
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled8 ? <p onClick={handleToggle8}><FaMinus /></p> : <p onClick={handleToggle8}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">NORTHERN</span> HEMISPHERE</h1>
                        {isToggled9 ? 
                        
                        <ul>
                        <li>
                        Ilya Du Solar (Federal Polytechnic, Bida.)                                            
                    </li>
                    <li>
                        Ilya Du Komputa (Federal University of Technology, Minna.)
                    </li>
                    <li>
                        Ilya Du Rock (University of Jos, Jos.)                       
                    </li>
                    <li>
                        Ilya Du Kotang (Federal College of Education, Kotangora)                        
                    </li>
                        <li>
                            Ilya Du Arewa (Kaduna Polytechnic, Kaduna.)
                        </li>
                        <li>
                            Ilya Du Desert (Federal Polytechnic, Birnin-Kebbi.)                       
                        </li>
                        <li>
                            Ilya Du Turban
                            (Ahmadu Bello University, Zaria.)     
                        </li>
                        <li>
                            Ilya Du ZauZau
                            (College of Education, Zaria.)
                        </li>
                        <li>
                            Ilya Du Rima
                            (Usman Dan Fodio University, Sokoto.)
                        </li>
                        
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled9 ? <p onClick={handleToggle9}><FaMinus /></p> : <p onClick={handleToggle9}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">UNITED KINGDOM</span> HEMISPHERE</h1>
                        {isToggled10 ? 
                        
                        <ul>
                            <li>
                            Ilya Du Queen (University of East London)                        
                            </li>
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled10 ? <p onClick={handleToggle10}><FaMinus /></p> : <p onClick={handleToggle10}><FaPlus /></p>}
                </div>
                <div className="question">
                    <div className="fa">
                        <h1> THE KEGITES CLUB <span class="highlight">INDIA</span> HEMISPHERE</h1>
                        {isToggled11 ? 
                        
                        <ul>
                            <li>
                            Ilya Du Punjab (Punjab University, Chandigrah Punjab)                        
                            </li>
                        </ul>
                        
                        : 
                        
                        <p></p>}
                    </div>
                        {isToggled11 ? <p onClick={handleToggle11}><FaMinus /></p> : <p onClick={handleToggle11}><FaPlus /></p>}
                </div>
            </div>
        </section>
        
    </>
  )
}

export default Hemisphere