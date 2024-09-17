import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Component/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import KegYear from './Pages/KegYear'
import Lord from './Pages/Lord'
import Patrons from './Pages/Patrons'
import ChiefsisChronology from './Pages/ChiefsisChronology'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


import './App.css'

function App() {


  return (
    <div className="overlay">
        <Router>
          <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path= "/kegYear" element={<KegYear/>} />
          <Route path= "/chiefsischronology" element={<ChiefsisChronology/>} />
          <Route path= "/lord" element={<Lord/>} />
          <Route path= "/patrons" element={<Patrons/>} />
          </Routes> 
        </Router>
      
    </div>
  )
}

export default App

