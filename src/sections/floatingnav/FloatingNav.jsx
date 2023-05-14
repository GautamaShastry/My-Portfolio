import React from 'react'
import './FloatingNav.css'
import { FiHome } from 'react-icons/fi'
import { FaRegUser } from 'react-icons/fa'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { MdOutlineContactSupport } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { useState } from 'react'

const FloatingNav = () => {
    const [activeNav, setActiveNav] = useState('#home')

    return (
      <nav>
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active': ''}><FiHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillJournalBookmarkFill /></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactSupport /></a>
      </nav>
    )
}

export default FloatingNav
