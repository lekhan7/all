import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
import Button from 'react-bootstrap/Button';
function Banker({ start, ...props }) {
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log('handleShow called');
    setShow(true);
  };
  return (
    <div className='divss'>
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
   <Link  className='link' to="/createbanker"> POST-DETAILS </Link> 
   <Link className='linkk' to="/viewbankerproposal">VIEW BANKER PROPOSAL</Link>
    <Link className='linkkk'  to={"/view"} > VIEW BUSINESS  PROPOSAL </Link> <br />
    <Link className='linkkkk' to={"/viewinvestore"} > VIEW INVESTORE  PROPOSAL </Link> <br />
    <Link className='linkkkkk' to={"/viewadviserpro"} > VIEW BUSINESS ADVISER  PROPOSAL </Link> <br />
    <Link className='linkkkkkkk' to={"/viewalluser"} > VIEW USER QUERY  </Link> <br />
   
    </div>
  )
}

export default Banker