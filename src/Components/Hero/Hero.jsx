import React from 'react';
import './Hero.css';
import Hero1 from '../../assets/hero1.jpg';
import Hero2 from '../../assets/hero2.jpg';
import Hero3 from '../../assets/hero3.jpg';
function Hero() {
    return(
        <div className="hero">
            <div className="hero-text">
                <div className="hero-text-1">
                <p>It's all About</p>
                <p>New Year!</p>
                </div>
                <div className='hero-text-2'>
                    <p>Discover your iconic style. Ethnically sourced,</p>
                    <p>consciously crafted.</p>
                </div>
                <div className="hero-btn">
                    <button className='btn-1'>Shop Now</button>
                </div>
            </div>
            <div className="hero-img">
                <img className='hero-1' src={Hero1} alt="hero-img-1" />
                <img className='hero-2' src={Hero2} alt="hero-img-1" />
                <img className='hero-3' src={Hero3} alt="hero-img-1" />
                
            </div>
        </div>
    );
}


export default Hero;