import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function User({ start, ...props }) {
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
    </Offcanvas><br />
<Link className="link" to="/createuserquery"> POSY-QUERY </Link>    <br/>
<Link className="linkk" to="/view"> VIEW  BUSINESS PROPOSAL </Link>    <br/>
<Link className="linkkk" to="/viewadviserpro">VIEW BUSINESS ADVISORE PROPOSAL</Link>  <br/>
<Link className="linkkkk" to="/viewinvestore"> VIEW MY INVESTORE PROPOSAL </Link> <br/>
<Link className="linkkkkk" to="/viewalluser"> VIEW  All USER  PROPOSAL </Link> <br/>
    </div>






  )
}

export default User