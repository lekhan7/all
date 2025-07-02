import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function ViewPage({ start, ...props }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/proposal');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

 const [show, setShow] = useState(false);
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
    </Offcanvas><br />
    <div className='alldives'>
       <center>
        <h1>ALL BUSINESS  PROPOSAL</h1>
        </center>
      {data.map((item) => (
        <div className='ineerdiv' key={item._id}>
          <h2>{item.name}</h2>
          <p>Company Reg No: {item.regno}</p>
          <p>Business Category: {item.cat}</p>
          <p>Proposal Objective: {item.po}</p>
          <p>Customer: {item.cus}</p>
          <p>Other/Notes: {item.notes}</p>
          <p>Business Idea: {item.idea}</p> 
                 </div>
      ))}
     
    </div>
    </>
  );
}

export default ViewPage;