import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function ViewInvestore({ start, ...props }) {
        const[investoreview,setInvestoreview] =useState([])
         useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch('http://localhost:5000/api/investore');
                const invest = await response.json();
                setInvestoreview(invest);
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
        <h1>ALL INVESTORE PROPOSAL</h1>
        </center>
    {investoreview.map((invest) => (
        <div className='ineerdiv' key={invest._id}>
          <h2>{invest.type}</h2>
     
          <p> Catogory: {invest.cat}</p>
          <p> Investment Amount: {invest.amt}</p>
          <p>Expected revenue: {invest.er}</p>
          <p>Skill-set: {invest.skill}</p>
          <p>Experience: {invest.exp}</p>
          <p>Other details: {invest.oth}</p> 
          <p>Adhar ID: {invest.adhar}</p> 
                 </div>
                       
      ))}
    </div>
    </>
  )
}

export default ViewInvestore