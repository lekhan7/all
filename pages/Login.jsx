import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFirebase} from '../context/firebase';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./allcss/Login.css"

// import login from "C:/Users/acer/Desktop/CARE GUIDE/login.jpg"
function Login() {

    const[email,setEmail] =useState()
    const [password,setPasssword] =useState()
    const firebase = useFirebase();
     const navigate = useNavigate(); 
     const [role, setRole] = useState(''); 
      
    const handleGoogleLogin = async () => {
        const result = await firebase.siginwithgoogle();
        alert("done", result);
       
      };
      
      const handelsubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
          alert("Please fill in all the details");
          return;
        }
        navigate("/load")
        const result = await firebase.signInUserWithEmailAndPassword(email, password);
                  alert("done", result);
       if (role) {
 if (role==="USER") {
  navigate("/user")
 }
      if (role==="Admine") {
        navigate("/admine")
      } 
      if (role==="collage") {
        navigate("/collageintraface")
      }
    } 
      }
     
  return (

    <>

   <center> <h1>LOGIN PAGE </h1></center><br></br>
   <div className='all'>
      
   <div className='main'>

     <div className="contasiner m-5">
     <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control     onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control onChange={(e) => setPasssword(e.target.value)} type="password" placeholder="Password" />
      </FloatingLabel>
      <Form.Select onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="">Select Role</option>
                <option value="USER">User</option>
                 <option value="collage">College</option>
            </Form.Select><br />
      <Button onClick={handelsubmit} variant="primary" type="submit">
        Submit
      </Button>
      <Button onClick={handleGoogleLogin} variant="primary" type="submit">
        Google
      </Button>
    </div>
    </div>
    </div>
  </>
  );
}

export default Login;