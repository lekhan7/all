import React, { useState,useEffect } from 'react'
import "./allcss/collagedetails.css"
import { useNavigate } from 'react-router-dom';
import Backbtn from "C:/Users/acer/Desktop/CARE GUIDE/vite-project/pages/Backbtn.jsx";
function Collagedetails({ start, ...props }) {

  const navigate = useNavigate();
    const[collage,setCollage] =useState([])
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
         const [show, setShow] = useState(false);
                const handleClose = () => setShow(false);
                const handleShow = () => {
                  console.log('handleShow called');
                  setShow(true);
                };


  const handelapply = async ()=>{
navigate("/load")
 navigate("/studentformdetails")
  }
  return (
   <>
      <Backbtn />
 
    <div className='alldives'>
       <center >
        <h1 className="heading"> ALL Collages</h1>
        </center>
    {collage.map((data) => (
        <div className='ineerdiv' key={data._clgid}>
          <center><p>Name</p><h2>{data.clgname}</h2></center>
          <p>Country: {data.Country}</p>
          <p> State: {data.State}</p>
          <p> City: {data.City}</p>
          <p>Courses: {data.Cdetails}</p>
          <p>Other details : {data.otherdetails}</p> 
           <button className='applybtn' onClick={handelapply}>Apply</button>
                 </div>
      ))}
     
    </div>


    
    </>
  )
}

export default Collagedetails