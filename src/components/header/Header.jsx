import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../assets/farewellBg.jpg"
// import White from "../../assets/testing.svg"


const Header = () => {
  return (
    <header data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000" id="home">
      {/* <img src={White} alt="kk" /> */}
      <div className="intro-board">
        <h1>{"< Rahul Pant />"}</h1>
      </div>
      <div className="container header__container">
        <div className="content-about-me">
          <div>
            <h1>Frontend Developer.</h1>
            <p>
              {/* Hello! I'm Rahul Pant, a self-taught programmer from Dehradun based and able to build Web presence from the ground up – from concept, navigation, layout and
            UI to top notch. */}
              I like to craft solid and scalable frontend
              products with great user experiences.</p>
          </div>
          <div>
            <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            <p>A Good experience of building products for clients and company.</p>
          </div>
        </div>

        <div className="me">
          <img src={ME} alt="me" />
          <CTA />
        </div>
      </div>

      

    </header>
  )
}

export default Header