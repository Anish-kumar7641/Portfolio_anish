import React from "react"
import './index.css'
import BlogPic from '../../assets/images/blog.png'
import rentPic from '../../assets/images/house-rent2.jpg'
import roomPic from '../../assets/images/room-book.png'
import pfolioPic from '../../assets/images/portfolio6.jpeg'
const Projects = () => {
  return (
    <div className='project'>
      <h1>//Projects</h1>
      <div className='project-card'>
        <img src={BlogPic} alt="BlogProject" />
        <div className="details">
          <h2>GDSC Hotel Booking Project</h2>
          <ul class="details_ul">
            <li>The Google Developer Student Council Club in our institute started this collective effort.</li>
            <li>After doing this assignment, I received a certification from GDSC.</li>
            <li>Tools & technologies used : REACT.JS, JAVASCRIPT, NODE.JS, EXPRESS.JS, MONGODB, GIT, GITHUB.</li>
            <li>Developed a platform for users to upload their business and for others to book them with ease.</li>
            <li>Designed user-friendly, accessible, and responsive User Interface.</li>
            <li>I also gained experience in teamwork, time management, and stress management while working on this project.</li>
          </ul>
        </div>


      </div>
      <div className='project-card2'>
        {/* <h2>The Google Developer Student Council Club in our institute started this collective effort. After doing this assignment, I received a certification from GDSC.</h2>
        <h3></h3>

        <p>Data Structures and Algorithms are building blocks of programming. Data structures enable us to organize and store data, whereas algorithms enable us to process that data in a meaningful sense. So opt for the best quality DSA Course completely in Python, to build & enhance your Data Structures and Algorithms skills from basic to advance in Python.</p> */}
         <div className="details">
          <h2>Blog Website Project</h2>
          <ul class="details_ul">
            <li>The Google Developer Student Council Club in our institute started this collective effort.</li>
            <li>After doing this assignment, I received a certification from GDSC.</li>
            <li>Tools & technologies used : REACT.JS, JAVASCRIPT, NODE.JS, EXPRESS.JS, MONGODB, JWT, GIT, GITHUB.</li>
            <li>Developed a social media platform that allows users to create profiles, create blogs, share posts, connect with friends and more!</li>
            <li>Designed user-centric, user-friendly, accessible, and responsive User Interface.</li>
            <li>Implemented user aunthentication and authorisation using JSON Web Tokens (JWT).</li>
            <li>Leverage bcrypt package to encrypt user password to enhance security.</li>
          </ul>
        </div>
        <img src={roomPic} alt="BlogProject" />

      </div>
      <div className='project-card'>
        <img src={rentPic} alt="BlogProject" />
        <p>Data Structures and Algorithms are building blocks of programming. Data structures enable us to organize and store data, whereas algorithms enable us to process that data in a meaningful sense. So opt for the best quality DSA Course completely in Python, to build & enhance your Data Structures and Algorithms skills from basic to advance in Python.</p>
      </div>
      <div className='project-card2'>
        <p>Data Structures and Algorithms are building blocks of programming. Data structures enable us to organize and store data, whereas algorithms enable us to process that data in a meaningful sense. So opt for the best quality DSA Course completely in Python, to build & enhance your Data Structures and Algorithms skills from basic to advance in Python.</p>
        <img src={pfolioPic} alt="BlogProject" />

      </div>
    </div>
  )
}

export default Projects

