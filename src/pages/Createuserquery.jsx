import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function Createuserquery({ start, ...props }) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        userid:"",
        uname:"",
        qdetails:""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleAddEntry = async () => {
        if (
            !userData.userid ||
            !userData.uname ||
             userData.qdetails === ""
        ) {
            alert("Please fill in all fields before adding.");
            return;
        }
        try {
            // Send form data to your backend API to store in MongoDB
            const response = await fetch('http://localhost:5000/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert("user query  Added Successfully");
                alert("YOUR QUERY IS VIEWED BY ALL")
                navigate("/viewalluser"); // Navigate to the view page on success
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
      </Offcanvas>
      <br />

<FloatingLabel controlId="floatingInput" label="User_ID" className="mb-3">
                <Form.Control name="userid" onChange={handleInputChange} type="text" value={userData.userid} placeholder="Customer" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
                <Form.Control name="uname" onChange={handleInputChange} type="text" value={userData.uname} placeholder="Enter Any Notes" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput"  label="Query-Details" className="mb-3">
                <Form.Control name="qdetails"  style={{ height: '100px' }} onChange={handleInputChange}  as="textarea" value={userData.qdetails} placeholder="Business Idea" />
            </FloatingLabel>
            <Button variant="success" onClick={handleAddEntry}>ADD-IDEA</Button>
            
    </div>
  )
}

export default Createuserquery