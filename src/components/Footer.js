import './FooterStyles.css';
import React from 'react';
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <div>
              <p>390 Pound Street - Athens, Georgia</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
              706-286-0303
            </h4>
          </div>
          <div className="email">
            <h4>
              <a href="/contact">
                <FaMailBulk
                  size={20}
                  style={{ color: 'white', marginRight: '2rem' }}
                />
              </a>
              kpfranklin22@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the Developer</h4>
          <p>
            I graduated GA Tech's EDX Full Stack MERN BootCamp. Using MongoDB,
            Express.js, React.js, and Node I have learned to create applications
            from front to back end!
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/kyle-franklin-493906258/">
              <FaLinkedin
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
            </a>

            <a href="https://github.com/Kpfranklin22">
              <FaGithub
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
