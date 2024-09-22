import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Component/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import KegYear from './Pages/KegYear'
import Lord from './Pages/Lord'
import Patrons from './Pages/Patrons'
import HistoryIlyaOdua from './Pages/HistoryIlyaOdua'
import ChiefsisChronology from './Pages/ChiefsisChronology'
import Upload from './Pages/Upload'
import Gallery from './Pages/Gallery'
import { SupabaseProvider } from './Context/SupabaseContext'
import { ImageProvider } from './Context/ImageContext'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Image from './Pages/Image'

import 'react-toastify/dist/ReactToastify.css';



import './App.css'

function App() {


  return (
    <div className="overlay">
      <ImageProvider>
      <SupabaseProvider>
        <Router>
          <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path= "/kegYear" element={<KegYear/>} />
          <Route path= "/chiefsischronology" element={<ChiefsisChronology/>} />
          <Route path= "/lord" element={<Lord/>} />
          <Route path= "/patrons" element={<Patrons/>} />
          <Route path= "/history-ilya-Odua" element={<HistoryIlyaOdua/>} />
          <Route path= "/upload" element={<Upload/>} />
          <Route path= "/gallery" element={<Gallery/>} />
          <Route path= "/image" element={<Image/>} />
         
          </Routes> 
        </Router>
      </SupabaseProvider>
      </ImageProvider>
      
    </div>
  )
}

export default App

