import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import pdf from '../assets/sample-resume.pdf';
import Button from 'react-bootstrap/Button';

const Resume = () => {
  return (
    <div>
      <Navbar />

      <HeroImg2
        heading="RESUME."
        text="Click the yellow button below to view or download!"
      />

      <Button style={{ position: "relative", left:"46.5%"}} href={pdf}>CLICK HERE</Button>

      <AboutContent />
      <Footer />
    </div>
  );
};

export default Resume;
