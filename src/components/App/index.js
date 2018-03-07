import React, { Component } from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import { Container } from 'reactstrap';

import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

import './App.css';
import TiSocialYoutube from 'react-icons/lib/ti/social-youtube';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const horizontalSliderProps = {
  name: 'horizontalSlider1', // name is required
  infinite: true, // enable infinite scrolling
};

const horizontalSlides = [
  <Slide> Slide 2.1 </Slide>,
  <Slide> Slide 2.2 </Slide>
];
horizontalSliderProps.slides = horizontalSlides;

const slides = [
  <Slide><About /></Slide>,
  <Slide><Portfolio /></Slide>,
  <Slide><Contact /></Slide>
];
fullPageOptions.slides = slides;

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
      <header>
        <a href="#about">About me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </header>
      <Container>
        <Fullpage {...fullPageOptions} />
      </Container>
      <footer>
        <a href="">Download CV</a>
        <a href="https://www.youtube.com/user/tamsDKT" target="_blank" rel="noopener noreferrer" className="App-footer-icon"><TiSocialYoutube /></a>
        <a href="https://www.linkedin.com/in/enrique-tamames-88538939/" target="_blank" rel="noopener noreferrer" className="App-footer-icon"><TiSocialLinkedin /></a>
      </footer>
      </div>
    )
  }
}

export default App;
