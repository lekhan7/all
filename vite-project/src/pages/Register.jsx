import React,{useState,useEffect}from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../../context/firebase';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function Register() {
    const firebase = useFirebase(); 
     const navigate = useNavigate();
    console.log(firebase)
const [email,setEmail]=useState('')
const [password,setPassword] =useState('');

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/login");
    }
  }, [firebase, navigate]);



const handelsubmit = async(e) =>{

e.preventDefault();
const result= await firebase.signupUserWithEmailAndPassword(email,password)
console.log(result)
navigate("/login")
  
   
}


   
  return (
<div className='container'>

    <Form onSubmit={handelsubmit}>
<FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control  onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
      </FloatingLabel>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
    create account 
      </Button>
</Form>
</div>
  )
}

export default Register