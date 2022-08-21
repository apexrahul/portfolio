import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rh5kctq', 'template_du8vlda', form.current, 'vr5ygQSorHyEiCLFO')
    e.target.reset();

  };

  return (
    <section id='contact' >
      <h5 data-aos="fade-down" data-aos-duration="3000" >Get In Touch</h5>
      <h2 data-aos="fade-down" data-aos-duration="3000" >Contact Me</h2>

      <div   className="container contact-container">
        <div data-aos="fade-down" data-aos-duration="3000" className="contact-options">
          <article className="contact-option">
          <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>rahulpant614@gmail.com</h5>
            <a href="mailto:rahulpant614@gmail.com" target="_blank"rel="noreferrer">Send A Messsage</a>
          </article>
          <article className="contact-option">
          <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Apex Coding</h5>
            <a href="https://m.me/rahulpant614/" target="_blank" rel="noreferrer">Send A Messsage</a>
          </article>
          <article className="contact-option">
          <BsWhatsapp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 89********</h5>
            <a href="https://api.whatsapp.com/send?phone=+91-8979105848" target="_blank" rel="noreferrer">Send A Messsage</a>
          </article>
        </div>
     
      { /* END OF CONTACT OPTIONS */}
      <form data-aos="fade-left" data-aos-duration="3000"  ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact