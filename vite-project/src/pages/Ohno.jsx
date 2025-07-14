import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../../context/firebase';

function OhNo() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      if (firebase.user.email === "lekhankt3@gmail.com") {
          alert("your loged in WELCOME") ;
           navigate("/home");
      } else {
        navigate("/user");
      }
    } 
  }, [firebase, navigate]);



  return (
    <div>
      <h1>  OHNO!! UR ALREDY LOGED IN </h1>
    </div>
  );
}

export default OhNo;