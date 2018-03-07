import React from 'react';
import { Row, Col } from 'reactstrap';

import './styles.css';
import ProfilePicture from '../../assets/enrtama.jpg';

import MdEmail from 'react-icons/lib/md/email';
import MdPhone from 'react-icons/lib/md/local-phone';

const About = (props) => {
  return (
    <Row className="About">
      <Col xs="auto" className="About-profile-picture-section">
        <img src={ProfilePicture} className="About-profile-picture" alt="ProfilePicture" />
      </Col>
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
  )
}

export default About;
