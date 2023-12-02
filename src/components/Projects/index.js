import React from "react"
import './index.css'
import BlogPic from '../../assets/images/blog.png'
import rentPic from '../../assets/images/house-rent2.jpg'
import roomPic from '../../assets/images/room-book.png'
import pfolioPic from '../../assets/images/portfolio6.jpeg'
import{faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Projects = () => {
  return (
    <div className='project'>
      <h1>//Projects</h1>
      <div className='project-card'>
        <img src={BlogPic} alt="BlogProject" />
        <div className="details">
          <div className="head">
          <h2>GDSC Hotel Booking Project </h2> 
          <a className="git-link" href="https://github.com/Anish-kumar7641/hotel-booking-frontend"><FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>GitHub</a>
          </div>
          
          
          <ul class="details_ul">
            <li>The Google Developer Student Council Club in our institute started this collective effort.</li>
            <li>After doing this assignment, I received a certification from GDSC.</li>
            <li>Tools & technologies used : REACT.JS, JAVASCRIPT, NODE.JS, EXPRESS.JS, MONGODB, GIT, GITHUB.</li>
            <li>Developed a platform for users to upload their business and for others to book them with ease.</li>
            {/* <li>Designed user-friendly, accessible, and responsive User Interface.</li> */}
            <li>I also gained experience in teamwork, time management, and stress management while working on this project.</li>
          </ul>
        </div>


      </div>
      <div className='project-card2'>
         <div className="details">
          <div className="head">
          <h2>Blog Website Project </h2> 
          <a className="git-link" href="https://github.com/Anish-kumar7641/CS-301-Project-1"><FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>GitHub</a>
          </div>
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
        <div className="details">
          {/* <h2>Rental Service Project</h2> */}
          <div className="head">
          <h2>Rental Service Project </h2> 
          <a className="git-link" href="https://github.com/Anand930singh/DBMS_rental2"><FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>GitHub</a>
          </div>
          <ul class="details_ul">
            <li>Tools & technologies used : REACT.JS, JAVASCRIPT, NODE.JS, EXPRESS.JS, SQL, GIT, GITHUB.</li>
            <li>Developed a website for a rental company.</li>
            <li>Designed user-centric, user-friendly, accessible, and responsive User Interface.</li>
            <li>Used SQL as our database.</li>
          </ul>
        </div>
      </div>
      <div className='project-card2'>
      <div className="details">
          {/* <h2>Portfolio Project</h2> */}
          <div className="head">
          <h2>Portfolio Project</h2> 
          <a className="git-link" href="https://github.com/Anish-kumar7641/Portfolio_anish"><FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>GitHub</a>
          </div>
          <ul class="details_ul">
            <li>Tools & technologies used : REACT.JS, JAVASCRIPT, CSS, SASS, GITHUB.</li>
            <li>Builded my portfolio.</li>
            <li>Designed user-centric, user-friendly and accessible User Interface.</li>
            <li>Deployed project on vercel.</li>
            
          </ul>
        </div>
        <img src={pfolioPic} alt="BlogProject" />

      </div>
    </div>
  )
}

export default Projects

