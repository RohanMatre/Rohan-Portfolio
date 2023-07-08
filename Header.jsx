import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import LOGO from '../../assets/logo.png';
import HeaderSocials from './HeaderSocials';

const phrases = ["Fullstack Developer", "UI/UX Designer", "ML Enthusiast"];

const Header = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="container header__container">
      <marquee direction="left" width="80%" scrollamount="3" onmouseover="this.stop();" onmouseout="this.start();"><h5>
WELCOME TO PORTFOLIO! WEBSITE IS UNDER ADVANCED UPDATION. STAY TUNED. THANKS FOR VISITING.</h5></marquee>
        <div><a href='#'><img src={LOGO} alt='logo'  className='logo'/></a></div>
        <h5>Hello I'm</h5>
        <h1>Rohan Matre</h1>
        <h3 className={`text-light ${isVisible ? 'visible' : ''}`}>
          {phrases[currentPhraseIndex]}
        </h3>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;
