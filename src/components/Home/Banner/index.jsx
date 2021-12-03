import React from 'react';
import './styles.css';
import bannerImg from './banner.png';
import Logo from '../../common/Logo';
import Typewriter from "typewriter-effect";


const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        
        <h1><Typewriter
  options={{
    strings: ['Welcome To My Restaurant !', 'Have a Nice Day ! Enjoy your meal'],
    autoStart: true,
    loop: true,
  }}
/> </h1>
        <p>Have a nice day</p>
        <button onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />

  
  </header>

  
);

export default Banner;
