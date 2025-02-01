import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/firebase';
import { useNavigate } from 'react-router-dom';
function Register() {
    const firebase = useFirebase();
    const [email,setEmail] =useState();
    const[password,setPassword] =useState();
    const navigate = useNavigate();
   console.log(firebase);
useEffect(()=>{
if(firebase.islogedin)

 navigate("/") 
  
},[firebase,navigate])
    const handelsubmit = async (e) =>{
     
        e.preventDefault();
        alert("login a user")
      const result = await firebase.signInuserWithEmailAndPassword(email,password);
        alert("done",result)
    }
    const logingo = () =>{
        navigate("/login")
    }


    
  return ( 

    <div className="contasiner m-5"> 
    
    <Form onSubmit={handelsubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword"  >
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
   
      </Form.Group>
      <Form.Select aria-label="Default select example">
      <option>SELECT YOUR GENDER</option>
      <option value="1">MALE</option>
      <option value="2">FEMAIL</option>
      <option value="3">OTHERS</option>
    </Form.Select>
      <Button variant="primary" onClick={logingo} type="submit">
        create account
      </Button>
    </Form> 
    {[
       
        'warning',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          please go to loginpage to use the app 
        </Alert>
      ))}
    </div>
  )
}

export default Register