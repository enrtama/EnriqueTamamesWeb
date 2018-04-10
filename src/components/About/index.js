import React from 'react';
import { Row, Col } from 'reactstrap';

import './styles.css';

import MdEmail from 'react-icons/lib/md/email';
import MdPhone from 'react-icons/lib/md/local-phone';

const About = (props) => {
  return (
    <div className="About">
    <Row>
      <Col className="About-profile-info">
        <div className="About-profile-title"><b>Enrique Tamames</b></div>
        <div className="About-profile-subtitle"><b>Frontend Developer</b></div>
        <table id="about">
          <tbody><tr>
            <td><b>AGE</b></td>
            <td className="About-profile-text">28</td>
          </tr></tbody>
          <tbody><tr>
            <td><b>ADDRESS</b></td>
            <td className="About-profile-text">Theodoor van Hoytemastraat 29, 1062 CG, Amsterdam</td>
          </tr></tbody>
          <tbody><tr>
            <td><b>EMAIL</b></td>
            <td className="About-profile-text"><MdEmail />enrique.tamames@gmail.com</td>
          </tr></tbody>
          <tbody><tr>
            <td><b>PHONE</b></td>
            <td className="About-profile-text"><MdPhone />+31683424534</td>
          </tr></tbody>
        </table>
      </Col>
    </Row>
    <Row className="About-profile-description">I am a Frontend Developer for the last 5 years dedicated mainly to create apps in ReactJS (React + Redux). I also have experience with other flux implementations like Reflux and advanced redux implementation like Redux-Saga. Moreover I learned many other responsabilities along the way related to full stack web development like PHP, CI/CD, AWS, integration with Android/iOS having a role of SCRUM master of a small team.</Row>
    </div>
  )
}

export default About;
