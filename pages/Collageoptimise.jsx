import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Backbtn from "C:/Users/acer/Desktop/CARE GUIDE/vite-project/pages/Backbtn.jsx";
function Collageoptimise({ start, ...props }) {
  const navigate = useNavigate();
  const [collage, setCollage] = useState([]);
  const [selectedCollage, setSelectedCollage] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/collage');
        const data = await response.json();
        setCollage(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (data) => {
    setSelectedCollage(data);
    setShowEditForm(true);
  };

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    try {
      // Sending the PUT request to update the collage
      const response = await fetch('http://localhost:5000/api/collage', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedCollage),
      });

      // Check if the response status is ok
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        alert(`Failed to save changes. ${errorText || 'Unknown error'}`);
        return;
      }

      // Parse the response as JSON
      const data = await response.json();

      // Updating the collage state with the new data
      setCollage((prevCollage) =>
        prevCollage.map((collageItem) =>
          collageItem.clgid === data.clgid ? data : collageItem
        )
      );

      setShowEditForm(false);
      alert('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving changes:', error);
      alert(`An error occurred while saving changes: ${error.message}`);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedCollage({ ...selectedCollage, [name]: value });
  };
const handelapplied=()=>{
  navigate("/applied")
}
  return (
    <>
   <Backbtn />
      <div className="alldives">
        <center>
          <h1 className="heading">ALL Collages</h1>
        </center>
        {collage.map((data) => (
          <div className="ineerdiv" key={data._clgid}>
            <center>
              <p>Name</p>
              <h2>{data.clgname}</h2>
            </center>
            <p>Country: {data.Country}</p>
            <p>State: {data.State}</p>
            <p>City: {data.City}</p>
            <p>Courses: {data.Cdetails}</p>
            <p>Other details: {data.otherdetails}</p>
            <button className="editbtn" onClick={() => handleEdit(data)}>
              Edit
            </button> 
            <button onClick={handelapplied}type="submit">see applied student details </button >
          </div>
        ))}
      </div>

      {showEditForm && (
        <div className="edit-form">
          <h2>Edit Collage Details</h2>
          <form onSubmit={handleSaveChanges}>
            <label>
              Name:
              <input
                type="text"
                name="clgname"
                value={selectedCollage.clgname}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Country:
              <input
                type="text"
                name="Country"
                value={selectedCollage.Country}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              State:
              <input
                type="text"
                name="State"
                value={selectedCollage.State}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              City:
              <input
                type="text"
                name="City"
                value={selectedCollage.City}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Courses:
              <input
                type="text"
                name="Cdetails"
                value={selectedCollage.Cdetails}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Other details:
              <input
                type="text"
                name="otherdetails"
                value={selectedCollage.otherdetails}
                onChange={handleInputChange}
              />
            </label>
            <br />  
            
            <button type="submit">Save Changes</button>
           
          </form> 
       
        </div>
      )}
    </>
  );
}

export default Collageoptimise;
