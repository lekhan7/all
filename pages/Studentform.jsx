// Studentform.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './allcss/studi.css';
import vedioilu from '../assets/vedioilu.mp4';
import Backbtn from '../pages/Backbtn'; // Adjust path if needed

function Studentform() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    studid: '',
    studname: '',
    studage: '',
    studemail: '',
    studselect: '',
    studaddress: '',
    studphno: '',
    studpic: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      setStudent({ ...student, [name]: files[0] });
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    const {
      studid,
      studname,
      studage,
      studemail,
      studselect,
      studaddress,
      studphno,
      studpic,
    } = student;

    if (!studid || !studname || !studage || !studemail || !studselect || !studaddress || !studphno || !studpic) {
      alert('Please fill all the fields.');
      return;
    }

    const formData = new FormData();
    for (let key in student) {
      formData.append(key, student[key]);
    }

    try {
      const response = await fetch('http://localhost:5000/api/studentform', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        if (window.confirm('Take 5 easyaste aptitude test to proceed?')) {
          navigate('/apptitude');
        } else {
          navigate('/collagedetails');
        }
      } else {
        alert('Failed to send application. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };


  return (
    <>
      <div className="form-video-container">
        <video autoPlay muted loop className="background-video">
          <source src={vedioilu} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="form-overlay">
          <form onSubmit={handleAdd} className="form-box">
            <h2>Student Application Form</h2>
            <label>Student Id</label>
            <input className="allinput" type="number" name="studid" value={student.studid} onChange={handleInputChange} placeholder="ID" /><br />

            <label>Student Name</label>
            <input className="allinput" type="text" name="studname" value={student.studname} onChange={handleInputChange} placeholder="Name" /><br />

            <label>Student Age</label>
            <input className="allinput" type="number" name="studage" value={student.studage} onChange={handleInputChange} placeholder="Age" /><br />

            <label>Student Email</label>
            <input className="allinput" type="email" name="studemail" value={student.studemail} onChange={handleInputChange} placeholder="Email" /><br />

            <label>Choose Your PU Combination</label>
            <select className="allinput" name="studselect" value={student.studselect} onChange={handleInputChange}>
              <option value="">Select Combination</option>
              <option value="12(commerce)passedout">12 (Commerce)</option>
              <option value="12(science)passedout">12 (Science)</option>
              <option value="12(management)passedout">12 (Management)</option>
            </select><br />

            <label>Student Address</label>
            <input className="allinput" type="text" name="studaddress" value={student.studaddress} onChange={handleInputChange} placeholder="Address" /><br />

            <label>Student Phone Number</label>
            <input className="allinput" type="number" name="studphno" value={student.studphno} onChange={handleInputChange} placeholder="Phone Number" /><br />

            <label>Upload PUC Marks Card</label>
            <input className="allinput" type="file" name="studpic" accept="image/*" onChange={handleInputChange} /><br />

            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Studentform;
