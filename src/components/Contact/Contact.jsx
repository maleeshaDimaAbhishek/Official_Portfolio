import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import whatsapp_icon from '../../assets/whatsapp.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d3f7ab0c-fd3f-48f5-8615-cdea9f23f2d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  
  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="content-left">
                <h1>Let's talk</h1>
                <p>I’m always open to new opportunities, collaborations, and projects. If you’re looking for a passionate developer eager to grow and contribute, feel free to reach out. Let’s build something great together!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                      <a href="mailto:maleeshadimal20@gmail.com">
                        <img src={mail_icon} alt="" /> maleeshadimal20@gmail.com
                      </a>
                    </div>
                    <div className="contact-detail">
                      <a href="tel:+94767924138">
                        <img src={call_icon} alt="" /> +94 767924138
                      </a>
                    </div>
                    <div className="contact-detail">
                      <a href="https://wa.me/+94767924138">
                          <img src={whatsapp_icon} alt="" /> +94 767924138
                      </a>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit}  className="content-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your email' name="email" />
                <label htmlFor="">Write Message</label>
                <textarea name="message" rows="8" placeholder='Type Your Message'></textarea>
                <button type='submit' className="contact-submit" >Contact</button>
            </form>
        </div>
    </div>
  )
}

export default Contact