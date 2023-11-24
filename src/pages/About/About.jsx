import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Everything Books</h2>
            <p className='fs-17'>Welcome to Everything Books, your go-to destination for exploring the vast world of literature at your fingertips. We believe that every reader deserves an effortless and enriching book-searching experience, and that's exactly what our app is designed to deliver.</p>
            <h2 className='about-title fs-26 ls-1'>Mission</h2>
            <p className='fs-17'>Our mission is to connect readers with their next great read. We're passionate about fostering a love for literature and making the journey of discovering new books as enjoyable as the act of reading itself.</p>
            <h2 className='about-title fs-26 ls-1'>Vision</h2>
            <p className='fs-17'>We envision a world where every reader, regardless of their preferences or experience level, can easily navigate the vast landscape of literature. By providing a user-friendly platform and fostering a sense of community, we aim to make Everything Books a trusted companion on your reading journey.</p>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default About