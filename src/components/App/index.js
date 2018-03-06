import React, { Component } from 'react';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';
import { Container } from 'reactstrap';

import About from 'components/About';
import Portfolio from 'components/Portfolio';
import Contact from 'components/Contact';

import './App.css';
import TiSocialYoutube from 'react-icons/lib/ti/social-youtube';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';

class App extends Component {
  render() {
    let options = {
      sectionClassName: 'section',
      anchors: ['about', 'portfolio', 'contact'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation: true
    }
    return (
      <div className="App">
      <Header>
        <a href="#about">About me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </Header>
      <Container>
        <SectionsContainer className="container" {...options}>
          <Section verticalAlign="true" ><About /></Section>
          <Section verticalAlign="true"><Portfolio /></Section>
          <Section verticalAlign="true"><Contact /></Section>
        </SectionsContainer>
      </Container>
      <Footer>
        <a href="">Download CV</a>
        <a href="https://www.youtube.com/user/tamsDKT" target="_blank" rel="noopener noreferrer" className="App-footer-icon"><TiSocialYoutube /></a>
        <a href="https://www.linkedin.com/in/enrique-tamames-88538939/" target="_blank" rel="noopener noreferrer" className="App-footer-icon"><TiSocialLinkedin /></a>
      </Footer>
      </div>
    )
  }
}

export default App;
