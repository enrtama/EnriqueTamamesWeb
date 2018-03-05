import React, { Component } from 'react';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';

import About from 'components/About';
import Portfolio from 'components/Portfolio';
import Contact from 'components/Contact';

import 'styles/App.css';

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
        <Footer>
          <a href="">Download CV</a>
          <a href="">About</a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7"><About /></Section>
          <Section color="#A7DBD8"><Portfolio /></Section>
          <Section color="#E0E4CC"><Contact /></Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
