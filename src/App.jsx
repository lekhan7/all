
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect,useState } from 'react';
import{Routes,Route, Navigate}from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProfasol from "./pages/CreateProfasol";
import BusinessIdea from "./pages/BusinessIdea";
import ViewBusprofosal from "./pages/ViewBusprofosal";
import Loadaing from "./pages/Loadaing";
import BusinessAvisore from "./pages/BusinessAvisore";
import Createsdviserpro from "./pages/Createsdviserpro";
import Viewadvisorepropoasal from "./pages/Viewadvisorepropoasal";
import Createinvest from "./pages/Createinvest";
import Invester from "./pages/Invester";
import ViewInvestore from "./pages/ViewInvestore";
import User from "./pages/User";
import Createuserquery from "./pages/Createuserquery";
import ReplyPage from "./pages/Reply";
import Viewalluserquery from "./pages/Viewalluserquery";
import CreateBankerpropoasal from "./pages/CreateBankerpropoasal";
import Viewbanker from "./pages/Viewbanker";
import Banker from "./pages/Banker";
import Backpage from "./pages/Backpage";

function App() {
  

  
  return (
    <div>
    <Routes>
<Route path="/login"element={<Login />} />
<Route path="/"element={<Register />} />
<Route path="/creatprofo"element={<CreateProfasol />} />
<Route path="/business"element={<BusinessIdea />} />
<Route path="/view"element={<ViewBusprofosal/>} />
<Route path="/load"element={<Loadaing/>} />
<Route path="/viewadviserpro"element={<Viewadvisorepropoasal/>} />
<Route path="/businessadvisore"element={<BusinessAvisore/>} />
<Route path="/cretaeadvise"element={<Createsdviserpro/>} />
<Route path="/investore"element={<Invester/>} />
<Route path="/createinvespro"element={<Createinvest/>} />
<Route path="/viewinvestore"element={<ViewInvestore/>} />
<Route path="/user"element={<User/>} />
<Route path="/createuserquery"element={<Createuserquery/>} /> 
<Route path="/reply"element={<ReplyPage/>} />
<Route path="/viewalluser"element={<Viewalluserquery/>} />
<Route path="/createbanker"element={<CreateBankerpropoasal/>} />
<Route path="/viewbankerproposal"element={<Viewbanker/>} />
<Route path="/banker"element={<Banker/>} />
<Route path="/back"element={<Backpage/>} />
 </Routes>
    </div>
  );
};

export default App;
