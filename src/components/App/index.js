import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';

import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

import './App.css';
import TiSocialYoutube from 'react-icons/lib/ti/social-youtube';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';
import TiMail from 'react-icons/lib/ti/mail';
import ProfilePicture from '../../assets/enrtama.png';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Col xs="auto" className="About-profile-picture-section">
          <img src={ProfilePicture} className="About-profile-picture" alt="ProfilePicture" />
        </Col>
      </header>
      <Container>
        <About />
        <Portfolio />
        <Contact />
      </Container>
      <footer>
      <a href="mailto:enrique.tamames@gmail.com" target="_top" rel="noopener noreferrer" className="App-footer-icon"><TiMail /></a>
        <a href="https://www.youtube.com/user/tamsDKT" target="_blank" rel="noopener noreferrer" className="App-footer-icon"><TiSocialYoutube /></a>
        <a href="https://www.linkedin.com/in/enrique-tamames-88538939/" target="_blank" rel="noopener noreferrer" className="App-footer-icon"><TiSocialLinkedin /></a>
      </footer>
      </div>
    )
  }
}

export default App;
