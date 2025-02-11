// 
import "bootstrap/dist/css/bootstrap.min.css";
import{Routes,Route, Navigate}from "react-router-dom"
import React from 'react';
import Login from "./pages/Login";
import Adminehome from "./pages/Adminehome";
import Userhome from "./Userhome";
import Register from "./pages/Register";
import Addsport from "./pages/Addsport";
import OhNo from "./pages/Ohno";
import Logout from "./pages/Logout";
import View from "./pages/View";
// import AddEvent from "./pages/Add";
import Application from "./pages/Application";
import Applied from "./pages/Applied";
import Profile from "./pages/Profile";
function App() {
 

  return (
<div> 
  
    <Routes>
     
 <Route path="/home"element={<Adminehome />}/>
 <Route path="/user"element={<Userhome  />}/>
 <Route path="/login"element={<Login />}/>
 <Route path="/"element={<Register />}/>
 <Route path="/addsport"element={<Addsport />}/>
 <Route path="/ohno"element={<OhNo />}/>
 <Route path="/logout"element={<Logout />}/>
 <Route path="/view"element={<View />}/>
 <Route path="/applied"element={<Applied />}/> 
 <Route path="/application"element={<Application />}/>
 <Route path="/profile"element={<Profile />}/>
    </Routes>
   
  </div>
  )
}

export default App