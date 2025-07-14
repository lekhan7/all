import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { useFirebase } from '../context/firebase';
import Backbtn from "./Backbtn.jsx";
import "./allcss/register.css"
function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('password');
   const[phno,setPhno]=useState("")
    const firebase = useFirebase();
    const navigate = useNavigate(); 
    useEffect(() => {
      if (firebase.isLoggedIn) {
        navigate("/login");
      }
    }, [firebase, navigate]);
  
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await firebase.signupUserWithEmailAndPassword(email, password);
        navigate("/load")
        navigate("/login");
        console.log(result);

    }
    const togglePasswordVisibility = () => {
        setPassword(prevType => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <>
          <Backbtn />
      <center> <h1>REGISTRATION PAGE </h1></center> 
        <div className='container '>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="name@example.com" 
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Phone number " className="mb-3">
                <Form.Control 
                    onChange={(e) => setPhno(e.target.value)} 
                    type="number" 
                    placeholder="name@example.com" 
                />
            </FloatingLabel>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type={password}
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            />
        
            
            <button onClick={togglePasswordVisibility}>
                {password === 'password' ? 'Show Password' : 'Hide Password'}
            </button>
            
            <button onClick={handleSubmit}>Submit</button>
        </div></>
    );
}

export default Register;
