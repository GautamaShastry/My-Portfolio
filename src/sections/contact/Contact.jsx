import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { SiMessenger } from 'react-icons/si'
import { SiWhatsapp } from 'react-icons/si'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x8kac91', 'template_xefcsr7', form.current, 'DdamjY285flEnTJ1c')
    .then((result) => {
        console.log(result.text);
        e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gautam.2k02@gmail.com</h5>
            <a href="mailto:gautam.2k02@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Gautam Bulusu</h5>
            <a href="https://m.me/100016511671232">Send a message</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className='contact__option__icon'/>
            <h4>WhatsApp</h4>
            <h5>Gautama Shastry</h5>
            <a href="https://api.whatsapp.com/send?phone+917032623458">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
