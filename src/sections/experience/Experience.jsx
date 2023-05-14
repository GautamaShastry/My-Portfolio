import React from 'react'
import './Experience.css'
import ProgressBar from '@ramonak/react-progress-bar'
import { ImHtmlFive } from 'react-icons/im'
import { SiCss3 } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaJava } from 'react-icons/fa'
import { SiPython } from 'react-icons/si'
import { SiSpringboot } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience">
        <h5>What Skills I have</h5>
        <h2>Skills</h2>
        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>FrondEnd Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <ImHtmlFive className='experience__icon' />
                        <h4>HTML</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={75} bgColor='#f55f02' animateOnRender={true} />
                    </article>
                    <article className="experience__details">
                        <SiCss3 className='experience__icon' />
                        <h4>CSS</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={75} bgColor='#148BF7' animateOnRender={true} />
                    </article>
                    <article className="experience__details">
                        <IoLogoJavascript className='experience__icon'/>
                        <h4>JavaScript</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={75} bgColor='#f5e902' animateOnRender={true}/>
                    </article>
                    <article className="experience__details">
                        <FaReact className='experience__icon'/>
                        <h4>ReactJs</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={50} bgColor='#02c4f5' animateOnRender={true}/>
                    </article>
                </div>
            </div>

            <div className="experience__programming">
                <h3>Programming Languages</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <SiPython className='experience__icon'/>
                        <h4>Python</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={70} bgColor='#148BF7' animateOnRender={true}/>
                    </article>

                    <article className="experience__details">
                        <FaJava className='experience__icon'/>
                        <h4>Java</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={30} bgColor='#a19f9f' animateOnRender={true}/>
                    </article>
                </div>
            </div>

            <div className="experience__backend">
                <h3>BackEnd Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <FaNodeJs className='experience__icon'/>
                        <h4>NodeJs</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={20} bgColor='#00ff00' animateOnRender={true}/>
                    </article>

                    <article className="experience__details">
                        <SiSpringboot className='experience__icon'/>
                        <h4>SpringBoot</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={40} bgColor='#f5e902' animateOnRender={true}/>
                    </article>

                    
                </div>
            </div>

            <div className="experience__databases">
                <h3>DataBases</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <SiMongodb className='experience__icon'/>
                        <h4>Mongo DB</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={40} bgColor='#00b300' animateOnRender={true}/>
                    </article>

                    <article className="experience__details">
                        <SiMysql className='experience__icon'/>
                        <h4>SQL</h4>
                        <ProgressBar className='experience__bar' isLabelVisible={false} completed={50} bgColor='#02c4f5' animateOnRender={true}/>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
