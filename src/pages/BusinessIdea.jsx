
import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "../allcss/businessman.css"

import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
import Button from 'react-bootstrap/Button';
function BusinessIdea({ start, ...props }) {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => {
        console.log('handleShow called');
        setShow(true);
      };
const navigate = useNavigate
   
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
<Link  className='link'  to="/creatprofo"> POST-IDEA </Link>
   <Link className='linkk' to="/view"> VIEW BUSINESS PROPOSAL </Link>
<Link className='linkkk' to="/viewadviserpro">VIEW BUSINESS ADVISORE PROPOSAL</Link>
<Link className='linkkkk' to="/viewinvestore"> VIEW INVESTORE PROPOSAL </Link>
<Link className='linkkkkk' to="/viewalluser"> VIEW USER PROPOSAL  </Link>
<Link className='linkkkkkk' to="/viewbankerproposal"> VIEW BANKER PROPOSAL </Link>
    </div>
  )
}

export default BusinessIdea