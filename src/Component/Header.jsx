import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg'
import { useState } from 'react'

import { FaBars, FaTimes} from "react-icons/fa";


const Header = () => {
  const [isToggle, setIsToggle] = useState(false);



  const handleToggle =()=>{
    setIsToggle(!isToggle)
  }



  return (
    <header>
        <div className="container">
        <nav>
          <img src={Logo} className='logo' alt="logo" width={'50'} />
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/history-ilya-Odua">History of Ilya Odua</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/patrons">Patrons</Link></li>
          <li><Link to="/lord">present lords</Link></li>
          <li><Link to="/chiefsischronology">Chiefesis chronology</Link></li>
          <li><Link to="/KegYear">Register as member</Link></li>
          </ul>


          <div className="mobile-menu" onClick={handleToggle}>
              {isToggle ? <h4> <FaTimes/> </h4>: <FaBars/>}
          </div>  

          {isToggle && <div className="mobile-menu-item">
            <li><Link to="/">Home</Link></li>
          <li><Link to="/history-ilya-Odua">History of Ilya Odua</Link></li>
          <li><Link to="/lord">present lords</Link></li>
          <li><Link to="/patrons">Patrons</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/chiefsischronology">Chiefesis chronology</Link></li>
                <li><Link to="/KegYear">Register as member</Link></li>
          </div>
            
            
                    }




        </nav>
        </div>
      </header>

  )
}

export default Header