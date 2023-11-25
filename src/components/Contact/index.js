
import './index.css'
import React from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 3000);

      return () => {
          clearTimeout(timeoutId);
      };
  }, []);

  return (
    <>
    <div className="contact-page">
      <h1>
        <AnimatedLetters
        letterClas={letterClass}
        strArray={['C','o','n','t','a','c','t',' ','M','e']}
        idx={15}
        />
        </h1>  
       <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7021855660796!2d75.02269547335713!3d15.392607057199655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1699725833780!5m2!1sen!2sin" width="80%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>      
      <p>If you have any questions or feedback, feel free to reach out to me!</p>
      
      <form action="https://formspree.io/f/mqkvozok" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" cols="30" rows="6" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
    <Loader type="pacman" />
    </>
  );
}

export default Contact