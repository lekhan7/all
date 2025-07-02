
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function Createinvest({ start, ...props }) {
    const navigate = useNavigate();
    const [invesData, setInvesData] = useState({
        type: "",
        cat: "",
        amt: "",
        er: "",
        skill: "",
        exp: "",
        oth: "",
        adhar: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInvesData({ ...invesData, [name]: value });
    };

    const handleAddEntry = async () => {
        if (
            !invesData.type ||
            !invesData.cat ||
            !invesData.amt ||
            !invesData.er ||
            !invesData.skill ||
            !invesData.exp ||
            !invesData.oth ||
            invesData.adhar === ""
        ) {
            alert("Please fill in all fields before adding.");
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/investore', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(invesData),
            });
            if (response.ok) {
                alert("Business Idea Added Successfully");
                navigate("/viewinvestore"); // Navigate to the view page on success
            } else {
                alert("Failed to add the idea. Please try again.");
            }
        } catch (error) {
            console.error("Error while adding entry:", error);
            alert("An error occurred. Please try again later.");
        }
    }
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
      </Offcanvas><br />

            <FloatingLabel controlId="floatingInput" label="Investment Type" className="mb-3">
                <Form.Control name="type" onChange={handleInputChange} type="text" value={invesData.type} placeholder="Enter your investement type" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Catogory" className="mb-3">
                <Form.Control name="cat" onChange={handleInputChange} type="text" value={invesData.cat} placeholder="Enter Cetogory" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Investment Amount" className="mb-3">
                <Form.Control name="amt" onChange={handleInputChange} type="text" value={invesData.amt} placeholder="Enter your Business Category" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Expected revenue" className="mb-3">
                <Form.Control name="er" onChange={handleInputChange} type="text" value={invesData.er} placeholder="Enter your Proposal Objective" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Skill-set" className="mb-3">
                <Form.Control name="skill" onChange={handleInputChange} type="text" value={invesData.skill} placeholder="Customer" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Experience" className="mb-3">
                <Form.Control name="exp" onChange={handleInputChange} value={invesData.exp} placeholder="Enter Any Notes" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Other Notes" className="mb-3">
                <Form.Control name="oth" style={{ height: '100px' }} onChange={handleInputChange} as="textarea" value={invesData.oth} placeholder="Business Idea" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Adhar ID" className="mb-3">
                <Form.Control name="adhar" type='number' onChange={handleInputChange} value={invesData.adhar} placeholder="Business Idea" />
            </FloatingLabel>
            <Button variant="success" onClick={handleAddEntry}>ADD-IDEA</Button>
        </div>
    )
}

export default Createinvest