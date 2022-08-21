import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../assets/farewellBg.jpg"


const Header = () => {
  return (
    <header data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000">
      <div className="intro-board">
        <h1>{"< Rahul Pant />"}</h1>
        </div>
      <div className="container header__container">
        <div className="content-about-me">
        <h1>Fullstack Developer.</h1>
        <p>Hello! My name is Rahul Pant, a self-taught programmer and I'm a Dehradun based freelancer.I like to craft solid and scalable fullstack
         products with great user experiences.</p>
        <CTA />
        </div>
      
         <div className="me">
          <img src={ME} alt ="me" />
         </div>
      </div>

    </header>
  )
}

export default Header