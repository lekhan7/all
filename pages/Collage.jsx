import React, { useState } from 'react';
import "./allcss/collage.css"
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import Backbtn from "C:/Users/acer/Desktop/CARE GUIDE/vite-project/pages/Backbtn.jsx";
import "./allcss/clg.css"
function Collage() {
   const navigate = useNavigate();
const[clgdata,setClgdata]=useState({
  clgid:"",
  clgname:"",
Country:"",
State:"",
City:"",
Cdetails:"",
otherdetails:""
})

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setClgdata({ ...clgdata, [name]: value });
};


 const handeladd= async (e)=>{
if(
!clgdata.clgid||
!clgdata.clgname||
!clgdata.Country||
!clgdata.State||
!clgdata.City||
!clgdata.Cdetails||
clgdata.otherdetails ===""

) {
  

   alert("Please fill the all the content of the form  ")
return;
}
try {
  // Send form data to your backend API to store in MongoDB
  const response = await fetch('http://localhost:5000/api/collage', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(clgdata),
  });

  if (response.ok) {
      alert("Collage Added Sucessfully");
      navigate("/collageintraface"); 
  } else {
      alert("Failed to add the Collage. Please try again.");
  }
} catch (error) {
  console.error("Error while adding entry:", error);
  alert("An error occurred. Please try again later.");
}

};

 
  return (
 
  <>
    <Backbtn />
    <center>
 <div className="formclg">
      

<FloatingLabel  controlId="floatingInput"  onChange={handleInputChange} label="Collage_Id"value={clgdata.clgid} className="mb-3">
                <Form.Control name="clgid"  type="number" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" onChange={handleInputChange} label="collage Name" value={clgdata.clgname} className="mb-3">
                <Form.Control name="clgname" type="text"   />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" onChange={handleInputChange} label="Country"  value={clgdata.Country}className="mb-3">
                <Form.Control name="Country"  type="text"   />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" onChange={handleInputChange} label="State" value={clgdata.State} className="mb-3">
                <Form.Control name="State"  type="text"   />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" onChange={handleInputChange} label="City"  value={clgdata.City}className="mb-3">
                <Form.Control name="City"  type="text"   />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" onChange={handleInputChange}  label="Available courses Details "  value={clgdata.Cdetails}className="mb-3">
                <Form.Control name="Cdetails"  style={{ height: '100px' }}   as="textarea" placeholder="Business Idea" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" onChange={handleInputChange}  label="Other Details " value={clgdata.otherdetails} className="mb-3">
                <Form.Control name="otherdetails"  style={{ height: '10px' }}   as="textarea" placeholder="Business Idea" />
            </FloatingLabel>
            <Button  onClick={handeladd}   variant="success" >ADD-collage</Button>
            
    </div>
    </center>
  </>
  );
}

export default Collage;