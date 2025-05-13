import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Hero.css';
import SplitScreen from './SplitScreen'
import Contact from './Contact'
import Navbar from './Navbar'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Navbar />
      <SplitScreen />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
