import React from 'react';
import './styles.css';
import responsive from 'assets/responsive-devices.png';

const Portfolio = (props) => {
  return (
    <div className="Portfolio">
      <div className="Portfolio-projects">
        <div className="Portfolio-project-single">
          <a href="http://mariatamames.com/" target="_blank" rel="noopener noreferrer">
            <div className="Portfolio-overlay">
              <div className="Portfolio-overlay-title">LayerGloss, Frontend Developer</div>
              <div className="Portfolio-overlay-description">Webmaster</div>
            </div>
          </a>
        </div>
        <div className="Portfolio-project-single">
        <a href="http://mariatamames.com/" target="_blank" rel="noopener noreferrer">
          <div className="Portfolio-overlay">
            <div className="Portfolio-overlay-title">LayerGloss</div>
            <div className="Portfolio-overlay-description">As main developer my work includes develop and coordinate a small team of talented people producing creative products that ensure high quality, both for our internal and outsourcing projects.</div>
          </div>
        </a>
        </div>
        <div className="Portfolio-project-single">
          <a href="http://mariatamames.com/" target="_blank" rel="noopener noreferrer">
            <div className="Portfolio-overlay">
            <div className="Portfolio-overlay-title">Greenhouse Innovation, ReactJS Frontend Developer</div>
            <div className="Portfolio-overlay-description">At Greenhouse Innovation, we create innovative digital platforms that engage customers and enable brands and companies to connect with fans and clients. We understand the operational reality of today and love to implement the digital opportunities we see. We are always looking for the perfect combination of brilliant solutions and super sleek designs.</div>
            </div>
          </a>
        </div>
      </div>
      <img src={responsive} className="Portfolio-responsive" alt="responsive" />
    </div>
  )
}

export default Portfolio;
