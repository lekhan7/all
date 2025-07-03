import React, { useState,useEffect } from 'react'
import "./allcss/collagedetails.css"
import { useNavigate } from 'react-router-dom';
import Backbtn from "C:/Users/acer/Desktop/CARE GUIDE/vite-project/pages/Backbtn.jsx";
function Appliedstudent() {
    const navigate = useNavigate();
    const [studentapp,setStudentapp]=useState([])
       useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch('http://localhost:5000/api/studentform');
                const application = await response.json();
                setStudentapp(application);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
            fetchData();
          }, []);
             const [show, setShow] = useState(false);
                    const handleClose = () => setShow(false);
                    const handleShow = () => {
                      console.log('handleShow called');
                      setShow(true);
                    };
  return (
    <>
        <Backbtn />
    <div>
      <h1>Applied Students details:</h1>
{studentapp.map((application)=>
 <div className='ineerdiv' key={application.studid}>
          
          <p>Name: {application.studname}</p>
          <p> Age: {application.studage}</p>
          <p> Email: {application.studemail}</p>
          <p>Courses: {application.studselect}</p>
          <p>Address : {application.studaddress}</p> 
           <p>Phone number : {application.studphno}</p> 
           <button>Select</button> 
                 </div>
)}


    </div>
    </>
  )
}

export default Appliedstudent