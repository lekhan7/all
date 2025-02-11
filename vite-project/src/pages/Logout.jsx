import logout from 'C:/Users/acer/Desktop/sporld web/logout.jpg'
import { useNavigate, useLocation } from 'react-router-dom';
import { useFirebase } from "/context/firebase";
import { Link} from 'react-router-dom';
import React, {useState} from 'react';

import Button from "react-bootstrap/esm/Button";

function Logout({ start, ...props }) {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handellogout = async (e) => {
    e.preventDefault();
    alert("logout a user")
    const result = await firebase.signOutUser ();
    alert("done", result)
    navigate("/")
  }

 
  const handleBack = () => {
    navigate(-1);
  }

  return (
    <>
    
      <img  className='img'  src={logout}></img>
      <Link  style={{
        fontFamily:"cursive",
        fontWeight:"bolder",
        cursor:"pointer",
        all:"unset",
      }} onClick={handellogout} className="nav">Logout</Link>
      <Button variant="secondary" onClick={handleBack} className="nav">Back</Button>
    </>
  )
}

export default Logout