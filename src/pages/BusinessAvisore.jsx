import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import "../allcss/Businessadvisore.css"

import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
import Button from 'react-bootstrap/Button';
function BusinessAvisore({ start, ...props }) {
     const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      console.log('handleShow called');
      setShow(true);
    };
  return (
    
<>
<div className='divs'>
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
   <Link className='link1' to={"/cretaeadvise"} > CREATE ADVISER  PROPOSAL </Link> <br />
   <Link className='link2' to={"/viewadviserpro"} > View Proposal </Link>
   <Link className='link3' to={"/view"} > VIEW Business Proposal </Link> <br />
   <Link className='link4' to={"/viewbankerproposal"} > View BANKER  Prooposal </Link>
   <Link className='link5' to={"/viewalluser"} > View User Query </Link>

</div>
</>
  )
}

export default BusinessAvisore