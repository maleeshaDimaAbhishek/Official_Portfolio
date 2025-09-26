import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <h2 className='logo'>Abhi</h2>
                <p>Passionate developer | Open to opportunities in software development, web development, and programming projects.</p>
            </div>
            {/*<div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>*/}
        </div>
        <hr />
            <div className="footer-bottom">
                <p className="footer-bootom-left">© 2025 R.V.M.D. Abhishek.All right reserved</p>
            </div>
    </div>
  )
}

export default Footer