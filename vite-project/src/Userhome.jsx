import React from 'react'
import { Link } from 'react-router-dom'
import ImageCarousel from './pages/Imagecoursel'
import "C:/Users/acer/Desktop/sporld web/vite-project/src/pages/allcss/user.css"
function Userhome() {
  return (
    <> 
        <h1 className="typing-animation">WELLCOME TO THE WORLD OF SPORTS </h1> 
    <div className='container-eg-btn-5'>
      <Link className='button button-10' to="/user">HOME</Link>
      <Link className='button button-7' to="/view">VIEW EVENT</Link>

      <Link className='button button-11' to="/applied">SELECTED EVENT</Link>
      <Link className='button button-7' to="/logout">LOGOUT </Link>
      <Link className='button button-11' to="/profile"> PROFILE </Link>
</div>
<ImageCarousel />
    </>
  )
}

export default Userhome