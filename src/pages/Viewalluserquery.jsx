// ViewMyUser Query.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Backpage from "./Backpage";
function ViewallUserQuery({ start, ...props }) {
  const [userqu, setUserqu] = useState([]);
  const [replies, setReplies] = useState([]);
  const location = useLocation();
 const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user');
        const user = await response.json();
        setUserqu(user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedReplies = JSON.parse(localStorage.getItem('replies')) || [];
    setReplies(storedReplies);
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
        <h1> ALL USER QUERY </h1>
      </center>
      {userqu.map((userdetails) => (
        <div className='ineerdiv' key={userdetails._id}>
          <center><h2>{userdetails.uname}</h2></center>
          <p> User_ID: {userdetails.userid}</p>
          <p> User Query: {userdetails.qdetails}</p>
          {replies
            .filter((reply) => reply.queryId === userdetails._id)
            .map((reply, index) => (
              <p key={index}>Reply:{index + 1}: {reply.reply}</p>
            ))}
          <button onClick={() => navigate('/reply', { state: { query: userdetails } })}>
            Reply
          </button>
        </div>
      ))}
    </div>
    </>
  );
}

export default ViewallUserQuery;