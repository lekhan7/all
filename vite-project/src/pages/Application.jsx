import "./allcss/Applicaytion.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  

function ApplicationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!name || !email || !address || !area || !phone) {
      alert('Please fill out all fields before submitting the form.');
    } else {
     
      const applicationData = { name, email, address, area, phone };
      localStorage.setItem('applicationData', JSON.stringify(applicationData));
      alert('Form submitted successfully!');
      
    
      setName('');
      setEmail('');
      setAddress('');
      setArea('');
      setPhone('');
      
      
      navigate('/applied'); 
    }
  };

  return (
    <div className="application-page">
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Area:</label>
          <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ApplicationPage;
