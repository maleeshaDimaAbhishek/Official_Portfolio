import React, { useState, useRef, useEffect } from 'react'
import './NavBar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const NavbAr = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef();
  const overlayRef = useRef();

  const openMenu = () => {
    if (!isMobileMenuOpen && menuRef.current) {
      menuRef.current.classList.add('open');
      setIsMobileMenuOpen(true);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }
  }

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove('open');
      setIsMobileMenuOpen(false);
      // Restore body scroll
      document.body.style.overflow = 'unset';
    }
  }

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    // Close mobile menu after selection
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) && 
          !event.target.classList.contains('nav-mob-open')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Cleanup: restore body scroll
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className='navbar'>
        <p className='logo' onClick={() => handleMenuClick("home")}>Abhi</p>
        
        <img 
          src={menu_open} 
          onClick={openMenu} 
          alt="Open menu" 
          className='nav-mob-open'
          role="button"
          tabIndex={0}
          aria-label="Open mobile menu"
          onKeyDown={(e) => e.key === 'Enter' && openMenu()}
        />
        
        <ul ref={menuRef} className="navmenu">
          <img 
            src={menu_close} 
            onClick={closeMenu} 
            alt="Close menu" 
            className="nav-mob-close"
            role="button"
            tabIndex={0}
            aria-label="Close mobile menu"
            onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
          />
          
          <li>
            <AnchorLink className='anchor-link' href='#home'>
              <p onClick={() => handleMenuClick("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline} alt="Current page indicator" /> : null}
          </li>
          
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#about'>
              <p onClick={() => handleMenuClick("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline} alt="Current page indicator" /> : null}
          </li>
          
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#services'>
              <p onClick={() => handleMenuClick("services")}>Services</p>
            </AnchorLink>
            {menu === "services" ? <img src={underline} alt="Current page indicator" /> : null}
          </li>
          
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#work'>
              <p onClick={() => handleMenuClick("portfolio")}>Work</p>
            </AnchorLink>
            {menu === "portfolio" ? <img src={underline} alt="Current page indicator" /> : null}
          </li>
          
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              <p onClick={() => handleMenuClick("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? <img src={underline} alt="Current page indicator" /> : null}
          </li>
        </ul>
        
        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With me
          </AnchorLink>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          ref={overlayRef}
          className="nav-overlay active"
          onClick={closeMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
          aria-label="Close mobile menu"
        />
      )}
    </>
  )
}

export default NavbAr;
