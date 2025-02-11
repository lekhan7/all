import React from 'react'
import "./allcss/Admine.css"
import { Link } from 'react-router-dom'
import ImageCarousel from './Imagecoursel'


function Adminehome() {
  return (
   <>
   <h1 className="lekahn">    WELCOME LEKHAN for the adnmine page </h1>
   <nav className="main">
<div className='container-eg-btn-1'>
    <Link to="/home" className="button button-3">HOME</Link><br />
    <Link to="/addsport" className="button button-3">ADD SPORTS</Link><br />
    <Link to="/logout" className="button button-3"> LOGOUT</Link><br />
    <Link  to="/profile" className="button button-3"> PROFILE</Link><br />
   </div>
  </nav>
  <div>
   <ImageCarousel />
    
</div>

   </>
  )
}

export default Adminehome