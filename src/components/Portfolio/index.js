import React from 'react';
import { Row, Col } from 'reactstrap';

import './styles.css';
import mariaCover from '../../assets/maria-cover.jpg';
import layerglossCover from '../../assets/layergloss-cover.png';
import greenhouseCover from '../../assets/greenhouse-cover.jpg';
import sellyCover from '../../assets/selly-cover.png';

const Portfolio = (props) => {
  return (
      <Row className="Portfolio">
        <Col className="Portfolio-project-single" style={{backgroundImage: "url(" + mariaCover + ")"}}>
          <a href="http://mariatamames.com/" target="_blank" rel="noopener noreferrer">
            <div className="Portfolio-overlay">
              <div className="Portfolio-overlay-title">Maria Tamames Personal Website</div>
              <div className="Portfolio-overlay-description">Website of Maria Tamames, Fashion Designer. Development & maintenance of the website</div>
            </div>
          </a>
        </Col>
        <Col className="Portfolio-project-single" style={{backgroundImage: "url(" + sellyCover + ")"}}>
          <a href="http://www.sellyamsterdam.com/" target="_blank" rel="noopener noreferrer">
            <div className="Portfolio-overlay">
              <div className="Portfolio-overlay-title">Selly Shopping</div>
              <div className="Portfolio-overlay-description">Selly is your connection with a brilliant selection of shops you dont want to miss in this city. Selly plays host to an exclusive selection of Selly Amsterdam retailers, whose expertise range from retail to the food and service industry. Selly is the online starting point for your offline shopping experience
</div>
            </div>
          </a>
        </Col>

        <Col className="Portfolio-project-single" style={{backgroundImage: "url(" + layerglossCover + ")"}}>
        <a href="https://www.youtube.com/watch?v=2uuwxnyvtd8" target="_blank" rel="noopener noreferrer">
          <div className="Portfolio-overlay">
            <div className="Portfolio-overlay-title">LayerGloss, Frontend Developer</div>
            <div className="Portfolio-overlay-description">As main developer my work includes develop and coordinate a small team of talented people producing creative products that ensure high quality, both for our internal and outsourcing projects.</div>
          </div>
        </a>
        </Col>
        <Col className="Portfolio-project-single" style={{backgroundImage: "url(" + greenhouseCover + ")"}}>
          <a href="https://www.youtube.com/watch?v=Kof0iVtJZwI" target="_blank" rel="noopener noreferrer">
            <div className="Portfolio-overlay">
            <div className="Portfolio-overlay-title">Greenhouse Innovation, ReactJS Frontend Developer</div>
            <div className="Portfolio-overlay-description">Creation of innovative digital platforms that engage customers and enable brands and companies to connect with fans and clients. We understand the operational reality of today and love to implement the digital opportunities we see.</div>
            </div>
          </a>
        </Col>
      </Row>
  )
}

export default Portfolio;
