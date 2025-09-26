import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const hero = () => {
  return (
     <div id='home' className='hero'>
        <img src={profile_image} alt="" />
        <h1><span>I'm Abhishek,</span> FullStack Developer in Sri Lanka</h1>
        <p>Undergraduate in university of sri jayawardanapura</p>
        <div className="hero-action">
            <dev className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></dev>
            <div className="hero-resume">Download Resume</div>
        </div>
    </div>
  )
}

export default hero