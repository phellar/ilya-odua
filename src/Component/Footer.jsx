import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="footer">
      <p>
      Copyright © 2024 KEGITES CLUB ILYA ODUA | Developed by
       <Link to='https:/wa.me/23428321670' class="grit"> Grit Technology</Link> 

      </p>
    </footer>
  )
}

export default Footer