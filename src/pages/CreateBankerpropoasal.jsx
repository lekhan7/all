import { useState } from "react";
import React from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";

function CreateBankerpropoasal( { start, ...props }) {
  const [show, setShow] = useState(false);
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
        loan: "",
        maxage: "",
        minage: "",
        mni: "",
        guaname: "",
        conno: "",
        other:""
      });
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleAddEntry = async () => {
        if (
          !formData.loan ||
          !formData.maxage ||
          !formData.minage || 
          !formData.mni ||
          !formData.guaname ||
          !formData.conno ||
          !formData.other === ""
       
        ) {
          alert("Please fill in all fields before adding.");
          return;
        }
        try {
          const response = await fetch("http://localhost:5000/api/banker", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert("Banker proposal   Added Successfully");
            navigate("/viewbankerproposal"); // Navigate to the view page on success
        } else {
            alert("Failed to add the proposal. Please try again.");
        }
    } catch (error) {
        console.error("Error while adding entry:", error);
        alert("An error occurred. Please try again later.");
    }
    };
    
  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log('handleShow called');
    setShow(true);
  };
    
  return (
    <>
     <Button variant="primary" onClick={handleShow} className="me-200">
        {start} MENU
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>=</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="custom-offcanvas-body">
       <Backpage />
        </Offcanvas.Body>
      </Offcanvas>
    <div>
   
      <h1>Banker Proposal</h1>
        <FloatingLabel controlId="floatingInput" label=" Loan Type" className="mb-3">
          <Form.Control name="loan" onChange={handleInputChange} type="text" value={formData.loan} placeholder="Enter the role name" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Maximum Age" className="mb-3">
          <Form.Control name="maxage" onChange={handleInputChange} type="text" value={formData.maxage} placeholder="Enter  the working tittle" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Minimum Age" className="mb-3">
          <Form.Control name="minage" onChange={handleInputChange}  value={formData.minage} placeholder="Enter The Description" />
        </FloatingLabel>




        <FloatingLabel controlId="floatingInput" label="Minimum Net-Income" className="mb-3">
          <Form.Control name="mni" onChange={handleInputChange} type="text" value={formData.mni} placeholder="Enter Any Notes" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label=" guarantor Name" className="mb-3">
          <Form.Control name="guaname"  onChange={handleInputChange} value={formData.guaname} placeholder="Business Idea" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Contact-Number" className="mb-3">
          <Form.Control name="conno"  onChange={handleInputChange} value={formData.conno} placeholder="Business Idea" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Other-Notes" className="mb-3">
          <Form.Control name="other" as={"textarea"}  onChange={handleInputChange} value={formData.other} placeholder="Business Idea" />
        </FloatingLabel>
        <Button variant="success" onClick={handleAddEntry}>ADD-DETAILS</Button>
      </div>
      </>
  )
}

export default CreateBankerpropoasal