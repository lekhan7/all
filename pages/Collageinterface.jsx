import React from 'react'
import "./allcss/colintra.css"


import { Link, useNavigate } from 'react-router-dom'
import "./allcss/interface.css"
function Collageinterface() {
const navigate = useNavigate();


  return (
    <>

    <div>
<center><h1 className='head'>Wellcome To Collguide ❤ </h1>
<h6 className='write1'>Create your collage to make the best student can get ito it </h6>
<p className='write2'>Check your collage details by seeing the rattings and day to day update<br />
Discover your ideal college match with CollegeSimply's
 data-driven search features. Make the most of our in-depth rankings and student reviews as you create your
  2025 college list.  our interactive tools allow you to filter, sort, compare, and view your admission chances, 
all in the quest for the perfect college fit tailored to your educational goals.</p></center>
   <center>
   <Link to="/college" className='btn1'>Add Collage</Link>
    <Link  to={"/clgoptimise"}  className='btn2'>Optimise Your collage </Link>
   </center> 
   </div>
<div className='part1'>

<p>
Build your College List
Take advantage of CollegeSimply's robust search features to discover colleges
 that interest you. The user-friendly interface lets you start populating your college 
 list right away, without any need  of account creation.

  These recommendations are driven by Collaguide extensive and proprietary database, which has 
  been meticulously compiled to reflect the patterns and preferences of students when considering colleges.
  
   Once you've built your college list,As sdudent applied ty will be selceted to a a pttitude selection test on the bases of courses 
</p>
</div>

    <footer className='term'>
<h4>Terms And Conditions </h4>
This reference is all about words that start with the letter T. It covers various sections like positive words, descriptive words, adjectives, nouns, and verbs that start with T. It includes detailed lists and images to help you expand your vocabulary with T words. Explore the different categories and improve your English s
kills by understanding how T words are use
    </footer>
    </>
  )
}

export default Collageinterface