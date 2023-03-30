import './AboutContentStyles.css';

import React from 'react';
import { Link } from 'react-router-dom';
import WebDev1 from "../assets/webdev1.jpg"
import WebDev2 from "../assets/webdev2.jpg"


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          A hardworking, honest, dependable worker with a sense of humor who is
          still kid at heart! I love skateboarding, video games, collectibles,
          and 90s saturday morning cartoons. I enjoy spending time trying new
          foods and visiting new places with friends! My aim is to bring my lust
          for life, child-like wonder, and creativity to every space I inhabit
          and to push the limits of what I'm capable of! I'm looking to join
          your team or take on your projects!
        </p>
        <Link to="/contact">
          <button className="btn btn-light">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={WebDev1} className="img" alt="true"/>
            </div>
            <div className='img-stack bottom'>
                <img src={WebDev2} className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
