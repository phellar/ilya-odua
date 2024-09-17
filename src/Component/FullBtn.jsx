// import { children } from "react"
import React from 'react'
import "./FullBtn.css"

const FullBtn= ({children,onClick}) => {
  return (
    <button className='fullBtn'>
       {children}
       {/* {onClick} */}
    </button>
  )
}

export default FullBtn