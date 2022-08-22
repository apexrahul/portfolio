import React,{useState} from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {SiPlanet} from "react-icons/si"
import {IoMdContact} from "react-icons/io"


const Nav = () => {
const [activeNav, setActiveNav]= useState("#")

  return (
    <nav>

      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><SiPlanet /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
      
    </nav>
  )
}

export default Nav