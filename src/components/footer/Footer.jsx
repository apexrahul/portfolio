import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {

  return (
    <footer>
       <a href="/#" className='footer-logo'>Rahul Pant</a>

       <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        {/* <li><a href="#experience">Experience</a></li> */}
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
       </ul>

       <div className="footer-socials">
        <a data-aos="flip-left" data-aos-duration="3000" href="/https://m.me/rahulpant614/" target="_blank"><FaFacebookF /></a>
        <a data-aos="flip-left" data-aos-duration="3000" href="/https://instagram.com/rahulpant07" target="_blank"><FiInstagram /></a>
        <a data-aos="flip-left" data-aos-duration="3000" href="/https://www.linkedin.com/in/rahul-pant-148a77230/" target="_blank"><BsLinkedin /></a>
        <a data-aos="flip-left" data-aos-duration="3000" href="/https://github.com/apexrahul" target="_blank"><BsGithub /></a>
       </div>

       <div className="hr-line" style={{ borderTop: "2px solid #db7d0a ", }}>
       <div data-aos="fade-down" data-aos-duration="3000"  className="footer-copyright">
        <h3>&copy; Rahul Pant. All rights reserved.</h3>
       </div>
       </div>

    </footer>
  )
}

export default Footer