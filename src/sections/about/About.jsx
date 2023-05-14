import React from 'react'
import './About.css'
import AboutImage from '../../assets/img4.jpeg'
import Cv from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Strong in Problem Solving Skills. Proficient in Programming Languages like
            C,PYTHON,HTML,CSS,JAVASCRIPT.Proficient in libraries like React.js and frameworks like Node.js .
          </p>
          <p>
            Hi I'm Gautam. I'm a Full Stack Web Developer with a bachelor's degree in Computer Science. My top priority is to start my career as entry-level software engineer in reputed
            organisation.
          </p>
          <a href={Cv} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About
