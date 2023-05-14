import React from 'react'
import './Header.css'
import HeaderImage from '../../assets/img2.jpg'
import data from './data'
import { MdOutlineContactSupport } from 'react-icons/md'
import { FaProjectDiagram } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>V S S Gautama Shastry Bulusu</h3>
        <p>
          Full Stack Web Developer, Entusiastic. Proficient in Programming Languages like Python, Javascript. Has strong grip in Library like React.js and frameworks like node.js.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk <MdOutlineContactSupport/></a>
          <a href="#portfolio" className='btn light'>My Projects <FaProjectDiagram/></a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
