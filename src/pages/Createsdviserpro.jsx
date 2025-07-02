import { useState } from "react";
import React from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function Createsdviserpro({ start, ...props }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    tittle: "",
    des: "",
    notes: "",
    hint: ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEntry = async () => {
    if (
      !formData.name ||
      !formData.tittle ||
      !formData.des ||
      !formData.notes ||
      formData.hint === ""
    ) {
      alert("Please fill in all fields before adding.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/advisor", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Business Idea Added Successfully");
        navigate("/viewadviserpro"); // Navigate to the view page on success
    } else {
        alert("Failed to add the idea. Please try again.");
    }
} catch (error) {
    console.error("Error while adding entry:", error);
    alert("An error occurred. Please try again later.");
}
};
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      console.log('handleShow called');
      setShow(true);
    };
    return (
      <div>
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
       
        <FloatingLabel controlId="floatingInput" label=" Name" className="mb-3">
          <Form.Control name="name" onChange={handleInputChange} type="text" value={formData.name} placeholder="Enter the role name" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Tittle" className="mb-3">
          <Form.Control name="tittle" onChange={handleInputChange} type="text" value={formData.tittle} placeholder="Enter  the working tittle" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
          <Form.Control name="des" style={{ height: '100px' }} onChange={handleInputChange} as="textarea" value={formData.des} placeholder="Enter The Description" />
        </FloatingLabel>




        <FloatingLabel controlId="floatingInput" label="Other/Notes" className="mb-3">
          <Form.Control name="notes" onChange={handleInputChange} type="text" value={formData.notes} placeholder="Enter Any Notes" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label=" Hint/Tips" className="mb-3">
          <Form.Control name="hint" style={{ height: '10px' }} onChange={handleInputChange} as="textarea" value={formData.hint} placeholder="Business Idea" />
        </FloatingLabel>

        <Button variant="success" onClick={handleAddEntry}>ADD-DETAILS</Button>
      </div>
    )
  }

  export default Createsdviserpro