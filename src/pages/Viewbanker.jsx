import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function Viewbanker({ start, ...props }) {
     const [data, setData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/banker');
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
        <h1>ALL BANKERS  PROPOSAL</h1>
        </center>
      {data.map((banker) => (
        <div className='ineerdiv' key={banker._id}>
         
          <p>Loan Type :{banker.loan}</p>
          <p>Maximum Age: {banker.maxage}</p>
          <p> Minimum Age : {banker.minage}</p>
          <p> Maximux Net Ammount : {banker.mni}</p>
          <p>Guarantor -Name: {banker.guaname}</p>
          <p>Contact -Phone no: {banker.conno}</p>
          <p>Other/Notes: {banker.other}</p> 
                 </div>
      ))}
     
    </div>
    </>
  )
}

export default Viewbanker