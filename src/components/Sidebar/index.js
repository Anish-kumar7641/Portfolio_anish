import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss'
import {Link,NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo_2.png'
// import LogoSubtitle from '../../assets/images/Anish.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import{faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>(
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            {/* <img className="sub-logo" src={LogoSubtitle} alt="Anish" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="linkdin-link" to="https://www.linkedin.com/in/anish-kumar-sinha-513884234">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="git-link" to="https://github.com/Anish-kumar7641">
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
            </NavLink>
            

        </nav>
    </div>
)
    

    

export default Sidebar