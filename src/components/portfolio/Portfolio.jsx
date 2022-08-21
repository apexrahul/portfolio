import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio3.png'
import IMG2 from '../../assets/graphcms.png'
import IMG3 from '../../assets/portfolio1.png'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
    <div className="portfolio-header">
      <h5 data-aos="fade-down" data-aos-duration="3000" >My Recent Work</h5>
      <h2 data-aos="fade-down" data-aos-duration="4000" >Portfolio</h2>
      </div>

      <div className="container portfolio-container">
        <articles data-aos="flip-left" data-aos-duration="3000"  className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Realtime Chat App</h3>
          <div className='portfolio-item-cta'>
          <a href="https://github.com/apexrahul/mern-chat-stack" target="_blank" className="btn" rel="noreferrer">Github</a>
          <a href="https://mern-chat-stack.herokuapp.com/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </articles>
        <articles data-aos="flip-left"  data-aos-duration="3000" className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>CMS Blog</h3>
          <div className='portfolio-item-cta'>
          <a href="https://github.com/apexrahul/apex-blog" target="_blank" className="btn" rel="noreferrer">Github</a>
          <a href="https://apex-blog-two.vercel.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </articles>
        <articles data-aos="flip-left"  data-aos-duration="3000" className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Netflix Clone</h3>
          <div className='portfolio-item-cta'>
          <a href="https://github.com/apexrahul/netflix-clone" className="btn"target="_blank" rel="noreferrer">Github</a>
          <a href="https://netflix-clone-87568.firebaseapp.com/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </articles>
      </div>
    </section>
  )
}

export default Portfolio