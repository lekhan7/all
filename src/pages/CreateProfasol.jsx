import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function CreateProfasol({ start, ...props }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        regno: "",
        cat: "",
        po: "",
        cus: "",
        notes: "",
        idea: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddEntry = async () => {
        if (
            !formData.name ||
            !formData.regno ||
            !formData.cat ||
            !formData.po ||
            !formData.cus ||
            !formData.notes ||
            formData.idea === ""
        ) {
            alert("Please fill in all fields before adding.");
            return;
        }

        try {
            // Send form data to your backend API to store in MongoDB
            const response = await fetch('http://localhost:5000/api/proposal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Business Idea Added Successfully");
                navigate("/view"); // Navigate to the view page on success
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
            <FloatingLabel controlId="floatingInput" label="Business Name" className="mb-3">
                <Form.Control name="name" onChange={handleInputChange} type="text" value={formData.name} placeholder="Enter your business name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Company reg no" className="mb-3">
                <Form.Control name="regno" onChange={handleInputChange} type="text" value={formData.regno} placeholder="Enter Your Company reg no" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Business Category" className="mb-3">
                <Form.Control name="cat" onChange={handleInputChange} type="text" value={formData.cat} placeholder="Enter your Business Category" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Proposal Objective" className="mb-3">
                <Form.Control name="po" onChange={handleInputChange} type="text" value={formData.po} placeholder="Enter your Proposal Objective" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Customer" className="mb-3">
                <Form.Control name="cus" onChange={handleInputChange} type="text" value={formData.cus} placeholder="Customer" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Other/Notes" className="mb-3">
                <Form.Control name="notes" onChange={handleInputChange} type="text" value={formData.notes} placeholder="Enter Any Notes" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput"  label="Business Idea" className="mb-3">
                <Form.Control name="idea"  style={{ height: '100px' }} onChange={handleInputChange}  as="textarea" value={formData.idea} placeholder="Business Idea" />
            </FloatingLabel>

            <Button variant="success" onClick={handleAddEntry}>ADD-IDEA</Button>
        </div>
    );
}

export default CreateProfasol;
