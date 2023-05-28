import React,{useEffect} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    AOS.init({disable: 'mobile'});
  }, []);
  return (
    <div>
        <Header />
        <Nav />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />    
    </div>
  )
}

export default App