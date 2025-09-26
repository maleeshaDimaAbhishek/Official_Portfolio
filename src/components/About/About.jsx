import React from 'react'
import'./About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/About_profile.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
       <div className="about-title">
            <h2>About Me</h2>
            <img src={theme_pattern} alt="" />
        </div> 
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} className='
                profile_image' alt="" />
            </div>
            <div className="about-right">
                <div className="about-paragraph">
                    <p>Hello! I'm [Your Name], a passionate developer with a love for creating intuitive and dynamic user experiences. With expertise in web technologies such as HTML, CSS, JavaScript, and React, I enjoy solving problems and continuously learning new skills. My goal is to build impactful projects that help others and contribute to the web development community.</p>
                    <p>Outside of coding, I enjoy [list some hobbies, e.g., traveling, photography, reading, etc.], which helps me stay creative and inspired.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Spring Boot</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>React & Angular</p><hr style={{width:"65%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-archievements">
            <div className="about-archievement">
                <h1>3+</h1>
                <p>YEARS WITH PROGRAMMING</p>
            </div>
            <hr />
            <div className="about-archievement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
        </div>

    </div>
  )
}

export default About