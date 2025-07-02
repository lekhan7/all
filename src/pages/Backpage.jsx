import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../allcss/slide.css";
import home from 'C:/Users/acer/Desktop/sporld web/home.jpg';
import logout from 'C:/Users/acer/Desktop/sporld web/logout.jpg';
import { useFirebase } from "/context/firebase";

function Backpage() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const handellogout = async (e) => {
    e.preventDefault();
    alert("Logging out the user...");
    
    const result = await firebase.signOutUser();
    alert("Logout done", result);
    navigate("/register");
  };

  const handleGoBack = () => {
    navigate(-1);  // This will take the user to the previous page
  };

  return (
    <>
      <img className='img' src={home} alt="Home" />
      <button onClick={handleGoBack} className="nav">Back</button> {/* Now it's a button for going back */}
      <br />
      <img className='img' src={logout} alt="Logout" />
      <Link onClick={handellogout} className="nav">Logout</Link>
    </>
  );
}

export default Backpage;
