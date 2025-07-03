import { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";

import{Routes,Route, Navigate}from "react-router-dom"


import Register from '../pages/Regeistration.jsx';
import Login from '../pages/Login';
import Load from '../pages/Load.jsx';
import Resume from '../pages/Resume.jsx';

import Collage from '../pages/collage.jsx';
import ApptitudeTest from '../pages/ApptitudeTest.jsx';
import CollageDetails from '../pages/CollageDetails.jsx';
import Collageinterface from '../pages/Collageinterface.jsx';
import Collageoptimise from '../pages/Collageoptimise.jsx';
import Studentform from '../pages/Studentform.jsx';
import Appliedstudent from '../pages/Appliedstudent.jsx';
import Creatresume from '../pages/creatresume.jsx';
// import Editcollagedetails from '../pages/Editcollagedetails.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path="/" element={< Register/>} />
    <Route path="/load" element={<Load />} />
    <Route path="/college" element={<Collage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/user" element={< Resume/>} />
    <Route path="/collagedetails" element={< CollageDetails/>} />
    <Route path="/apptitude" element={< ApptitudeTest/>} />
    <Route path="/collageintraface" element={< Collageinterface/>} />
    <Route path="/clgoptimise" element={< Collageoptimise/>} />
    <Route path="/studentformdetails" element={< Studentform/>} />
    <Route path="/applied" element={<Appliedstudent/>} /> 
 <Route path="/creatresume" element={<Creatresume/>} /> 

  </Routes>
  
    </>
  )
}

export default App
