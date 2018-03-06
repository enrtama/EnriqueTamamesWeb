import React from 'react';
import { Row, Col } from 'reactstrap';

import './styles.css';
import mariaCover from 'assets/maria-cover.jpg';
import layerglossCover from 'assets/layergloss-cover.png';
import greenhouseCover from 'assets/greenhouse-cover.jpg';

const Portfolio = (props) => {
  return (
      <Row className="Portfolio">
        <Col className="Portfolio-project-single" style={{backgroundImage: "url(" + mariaCover + ")"}}>
          <a href="http://mariatamames.com/" target="_blank" rel="noopener noreferrer">
            <div className="Portfolio-overlay">
              <div className="Portfolio-overlay-title">Maria Tamames Personal Website</div>
              <div className="Portfolio-overlay-description">Webmaster. Responsability for developing & maintaining the website</div>
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
            <div className="Portfolio-overlay-description">Creation of innovative digital platforms that engage customers and enable brands and companies to connect with fans and clients. We understand the operational reality of today and love to implement the digital opportunities we see. We are always looking for the perfect combination of brilliant solutions and super sleek designs.</div>
            </div>
          </a>
        </Col>
      </Row>
  )
}

export default Portfolio;
