import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id ='experience'>
      <h5 data-aos="fade-down" data-aos-duration="1000" >What Skills I have</h5>
      <h2 data-aos="fade-down" data-aos-duration="1000" >My Experience</h2>

      <div className="container experience-container">
        <div data-aos="zoom-in-down" data-aos-duration="2000" className="experience-frontend">
          <h3>Frontend Developer</h3>
          <div className="experience-content">

             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>
             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>
             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>
             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>Nextjs</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>
             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>ReactJS</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>

          </div>
        </div>

{/*  ***************BACKEND *************************************************/}

        <div data-aos="zoom-in-up" data-aos-duration="2000" className="experience-backend">
        <h3>Backend Developer</h3>
          <div className="experience-content">

             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>
             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>
             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>
             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>Expressjs</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>
             <articles className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon" />
              <div>
              <h4>jQuery</h4>
              <small className="text-light">Experienced</small>
              </div>
             </articles>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience