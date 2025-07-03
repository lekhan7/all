import React from 'react'
import "./allcss/resume.css"
import { BsAlarm } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaClosedCaptioning } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Backbtn from "C:/Users/acer/Desktop/CARE GUIDE/vite-project/pages/Backbtn.jsx";
function Resume() {
const navigate= useNavigate()
  const handelchose =()=>{
navigate("/load")
navigate("/collagedetails")
  }

  const handelresume =() =>{
    navigate("/creatresume")
  }
  return (
    <>
    
    <Backbtn />
    <center><nav className='mainnav'> <h2> <b className='build'>Now! </b> Know About Your College With Collgudi</h2></nav>
    </center>
   <center> <h1 className='text2'>We Will Assite Student With Fiding best college With Care Guide </h1>
    <p>Get the job 2x as fast.<br />It assist Student in choosing engineering and managemaent universite in India<br />The registartion process for chosen institution 
        <br />Are done through the enterence test </p>
        <button onClick={handelchose} className='btn1'>Search Collage</button> <button onClick={handelresume} className='btn2'>Build Your Resume </button> </center>
  <center><h1><b>Take One Step  that gets results</b></h1></center> 
<div className='box1'>
<FiAlignJustify />
  <h3><b>Recruiter-Approved</b></h3>
  <p>We work with marks gained by  apptitude test < br /></p>
</div> 
<div className='box2'>
<BsAlarm />
  <h3><b>Finish Your Test just  < br /> in 30 Minutes</b></h3>
  
<p>Helps to chose best institution as faster as u can  <br /></p>
   </div> 
   <div className='box3'>
   <FaCheckCircle />
  <h3><b>Land an Interview </b></h3>
  
<p>WE suggist the colleges according to your apptitude  <br />It helped over a million people get Dreem Colleges .</p>
   </div>
   
   
   
   <footer className='tandc'>
   <FaCheckDouble /><br />
   <FaCloudDownloadAlt /><br />
   <FaClosedCaptioning /><br />
   Terms and conditions agreements aren’t legally required, but it’s in your best interest to post one on your website or mobile app because it provides an additional layer of legal protection.

In the event of a dispute, arbitrators may consider multiple facets of your T&C document to determine whether each party acted within their rights.

While it’s not guaranteed to hold up in court, you have a better chance if you can prove your users read and agreed to the policy.

According to the American Bar Association (ABA), some specific legal disclosures apply to certain transactions and must be made as written statements, like stipulations outlined by:

The Digital Millennium Copyright Act (DMCA)
The Children’s Online Privacy Protection Act (COPPA)
You can add these disclosures as clauses in your website’s terms and conditions agreement.
   </footer>
   </>
  )
}

export default Resume