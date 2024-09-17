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
          <img src={Logo} alt="logo" width={'50'} />
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chiefsischronology">Cheifesis chrinology</Link></li>
          <li><Link to="/lord">List of present lord</Link></li>
          <li><Link to="/patrons">List of patrons</Link></li>
          <li><Link to="/">Roll Call of Members</Link></li>
          <li><Link to="/">Activities of Ilya Odua</Link></li>
          {/* <li><Link to="/">Ilya in whole gallery</Link></li> */}
          </ul>


          <div className="mobile-menu" onClick={handleToggle}>
              {isToggle ? <p> <FaTimes/> </p>: <FaBars/>}
          </div>  

          {isToggle && <div className="mobile-menu-item">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chiefsischronology">Cheifesis chrinology</Link></li>
                <li><Link to="/lord">List of present lord</Link></li>
                <li><Link to="/patrons">List of patrons</Link></li>
                <li><Link to="/">Roll Call of Members</Link></li>
                <li><Link to="/">Activities of Ilya Odua</Link></li>
                <li><Link to="/KegYear">Register as Chief</Link></li>
                {/* <li><Link to="/">Ilya in whole gallery</Link></li> */}
          </div>
            
            
                    }




        </nav>
        </div>
      </header>

  )
}

export default Header