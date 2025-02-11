import React, { useEffect, useState } from 'react';

import Button from "react-bootstrap/esm/Button";

import Offcanvas from 'react-bootstrap/Offcanvas';
function AppliedPage({ start, ...props }) {
  const [applicationData, setApplicationData] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Retrieve the application data from localStorage
    const data = localStorage.getItem('applicationData');
    if (data) {
      setApplicationData(JSON.parse(data));
    }
  }, []);

  if (!applicationData) {
    return <div>NO SUCH APPLIED APPLICATION </div>;
  }
const handeldelete = () =>{
  localStorage.removeItem('applicationData');
  setApplicationData(null);
}

  return (<>

    <div className="applied-page">
      <h1>Application Submitted</h1>
      <div>
        <h2>Your Application Details:</h2>
        <p><strong>Name:</strong> {applicationData.name}</p>
        <p><strong>Email:</strong> {applicationData.email}</p>
        <p><strong>Address:</strong> {applicationData.address}</p>
        <p><strong>Area:</strong> {applicationData.area}</p>
        <p><strong>Phone:</strong> {applicationData.phone}</p>
      </div>
      <Button variant="warning" onClick={handeldelete}>
              DELETE APPLICATION
            </Button>
    </div>
    </>
  );
}

export default AppliedPage;
