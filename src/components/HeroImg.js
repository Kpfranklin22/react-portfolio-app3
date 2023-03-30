import './HeroImgStyles.css';

import React from 'react';

import IntroImg from '../assets/arcade-bg.jpg';

import { Link } from 'react-router-dom';

import {BsJoystick} from "react-icons/bs"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Welcome Hero! </p>
        <p>Come, have a look at my wares!</p>
        <h1>Full Stack MERN Junior Developer</h1>
        <BsJoystick size={150} style={{ color: 'white', marginRight: "10" }} />
        <Link to="/project" className="btn btn-arcade">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-red btn-arcade">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
