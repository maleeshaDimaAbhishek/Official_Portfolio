import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon.svg' // Uncomment if you have this

const Services = () => {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme pattern decoration" />
      </div>
      
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div 
              key={index} 
              className="service-format"
              tabIndex={0}
              role="article"
              aria-label={`Service: ${service.s_name}`}
            >
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              
              {/* Uncomment this section if you want to add "Read More" functionality
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="Arrow icon" />
              </div>
              */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services