import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo8.png'
import Projects from '../Projects/index.js'
import './index.scss'
import Education from '../Education/index.js'
import LogoS from '../../assets/images/logo6.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['n', 'i', 's', 'h']
  const jobArray = [
    'K',
    'u',
    'm',
    'a',
    'r',
    ' ',
    'S',
    'i',
    'n',
    'h',
    'a',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
}, []);

  return (
    <div className='home'>
      <div className="container">
      
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Third-year computer science student with a focus on web development and machine learning.</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <div>
        <img className="solid-logo" 
        src={[]} 
        alt="JavaScript,  Developer"/> 
        </div> */}
        
        
      </div>
      <div className='projects'>
        <Projects/>
      </div>
      <div className='Education'>
        <Education/>
      </div>

      <Loader type="pacman" />
    </div>
    
  )
}

export default Home