import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function Invester({ start, ...props }) {
     const [show, setShow] = useState(false);
          const handleClose = () => setShow(false);
          const handleShow = () => {
            console.log('handleShow called');
            setShow(true);
          };
  return (
<>
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
      <br />
 <Link className='link' to={"/createinvespro"} > CREATE INVESTORE  PROPOSAL </Link> <br /> 
 <Link className='linkk'  to={"/view"} > VIEW BUSINESS  PROPOSAL </Link> <br />
 <Link className='linkkk' to={"/viewinvestore"} > VIEW INVESTORE  PROPOSAL </Link> <br />
 <Link className='linkkkk' to={"/viewadviserpro"} > VIEW BUSINESS ADVISER  PROPOSAL </Link> <br />
 <Link className='linkkkkk' to={"/viewbankerproposal"} > VIEW BANKER  PROPOSAL </Link> <br />
 <Link className='linkkkkkk' to={"/viewalluser"} > VIEW USER QUERY  </Link> <br />
</div>
</>
  )
}

export default Invester