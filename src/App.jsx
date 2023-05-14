import React from 'react'
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Experience from './sections/experience/Experience';
import FloatingNav from './sections/floatingnav/FloatingNav';

const App = () => {
  return (
    <main>
        <NavBar/>
        <Header/>
        <About/>
        {/* <FloatingNav/> */}
        <Experience/>
        {/* <Services/> */}
        <Portfolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
    </main>
  )
}

export default App
