// 
import "bootstrap/dist/css/bootstrap.min.css";
import{Routes,Route, Navigate}from "react-router-dom"
import React from 'react'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Thenavbar from "./components/Thenavbar";
import Upload from "./pages/upload";
import Share from "./pages/Share";

import Profile from "./pages/Profile";

import Home from "./pages/Home";
function App() {
 

  return (
<div> 
  <Thenavbar />
    <Routes>
     
 <Route path="/"element={<Home />}/>
 <Route path="/regester"element={<Register />}/>
 <Route path="/login"element={<Login />}/>
 <Route path="/upload"element={<Upload />}/>
 <Route path="/share"element={<Share />}/>
 <Route path="/profile"element={<Profile />}/>
    </Routes>
   
  </div>
  )
}

export default App