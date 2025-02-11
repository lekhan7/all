import React from 'react'
import { Link } from 'react-router-dom'
import "./allcss/slide.css"
import home from 'C:/Users/acer/Desktop/sporld web/home.jpg'
import logout from 'C:/Users/acer/Desktop/sporld web/logout.jpg'
import { useNavigate } from 'react-router-dom';
import { useFirebase } from "/context/firebase";
function Slidebar() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const handellogout = async (e) =>{
     
    e.preventDefault();
    alert("logout a user")
  const result = await firebase.signOutUser();
    alert("done",result)
    navigate("/register")
}
  return (
    <>
    <img  className='img'   src={home}></img>
    <Link to="/home" className="nav">Home</Link><br />
    <img  className='img'  src={logout}></img>
       <Link onClick={handellogout} className="nav">Logout</Link>
    </>
  )
}

export default Slidebar