import React, { useState,useEffect } from 'react'
import "../allcss/view.css"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function Viewadvisorepropoasal({ start, ...props }) {
    const[advisor,setAdvisor] =useState([])
     useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/advisor');
            const data = await response.json();
            setAdvisor(data);
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
        <h1>ALL BUSINESS ADIVISORE  PROPOSAL</h1>
        </center>
    {advisor.map((data) => (
        <div className='ineerdiv' key={data._id}>
          <center><h2>{data.name}</h2></center>
          <p>Tittle: {data.tittle}</p>
          <p> Dscription: {data.des}</p>
         
          <p>Other/Notes: {data.notes}</p>
          <p>Hints: {data.hint}</p> 
                 </div>
      ))}
    </div>
    </>
  )
}

export default Viewadvisorepropoasal