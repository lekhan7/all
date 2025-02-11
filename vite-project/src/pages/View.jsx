import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import"./allcss/view.css"
function ViewEvent() {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
   
    const storedEntries = localStorage.getItem('entries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  const handleBack = () => {
    navigate("/user");
  };
const handelAdd =() =>{
  navigate("/application");
}
  return (
    <div>
      <h1>View Events</h1>
      <Button variant="warning" onClick={handleBack} className="mb-3">
        Back
      </Button>
      {entries.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div>
          {entries.map((entry, index) => (
            <div key={index} className="mb-4 p-3 border rounded">
              <p>
                <strong>Name:</strong> {entry.name}
              </p>
              <p>
                <strong>Date:</strong> {entry.date}
              </p>
              <p>
                <strong>Time:</strong> {entry.time}
              </p>
              <p>
                <strong>Phone Number:</strong> {entry.phnumber}
              </p>
              <p>
                <strong>Country:</strong> {entry.country}
              </p>
              <p>
                <strong>State:</strong> {entry.state}
              </p>
              <p>
                <strong>City:</strong> {entry.city}
              </p>  
                            <Button variant="success" onClick={() =>
          window.open(`https://wa.me/${entry.phnumber}`, "_blank")
        }>       Chat
        </Button>
<div className="container-eg-btn-3">
        <button className='button button-7' onClick={handelAdd}>  TAKE A PART  </button>
           </div> </div>
          ))}

   
        </div>
      )}
    </div>
  );
}

export default ViewEvent;