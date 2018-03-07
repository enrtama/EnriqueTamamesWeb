import React from 'react';
import Radar from 'react-d3-radar';
import { Row, Col } from 'reactstrap';

import './styles.css';
import ReactPicture from '../../assets/react.png';
import ReduxPicture from '../../assets/redux.png';
import ReduxSagaPicture from '../../assets/redux-saga.png';
import PHPPicture from '../../assets/php.png';
import AWSPicture from '../../assets/aws.png';
import GitPicture from '../../assets/git.png';

const Contact = (props) => {
  return (
    <div>
    <Radar
      width={550}
      height={500}
      padding={80}
      domainMax={10}
      highlighted={null}
      onHover={(point) => {
        if (point) {
          console.log('hovered over a data point');
        } else {
          console.log('not over anything');
        }
      }}
      data={{
        variables: [
          {key: 'react', label: 'React'},
          {key: 'redux', label: 'Redux'},
          {key: 'reduxsaga', label: 'Redux-saga'},
          {key: 'htmlcss', label: 'HTML/CSS'},
          {key: 'testing', label: 'Testing'},
          {key: 'versionControlGit', label: 'Version Control/Git'},
          {key: 'responsiveDesign', label: 'Responsiveness'},
          {key: 'buildingAutomationTools', label: 'Building and Automation Tools'}
        ],
        sets: [
          {
            key: 'me',
            label: 'My Scores',
            values: {
              react: 9,
              redux: 8,
              reduxsaga: 6,
              htmlcss: 9,
              testing: 6,
              versionControlGit: 9,
              responsiveDesign: 7,
              buildingAutomationTools: 8,
            }
          }
        ]
      }}
    />
    <Row>
      <Col className="Contact-profile-skill"><img src={ReactPicture} alt="ReactPicture" width="100"/></Col>
      <Col className="Contact-profile-skill"><img style={{margin: "-10px"}} src={ReduxPicture} alt="ReduxPicture" width="70"/></Col>
      <Col className="Contact-profile-skill"><img style={{margin: "10px"}} src={ReduxSagaPicture} alt="ReduxSagaPicture" width="120"/></Col>
      <Col className="Contact-profile-skill"><img style={{margin: "-25px 10px"}} src={PHPPicture} alt="PHPPicture" width="100"/></Col>
      <Col className="Contact-profile-skill"><img style={{margin: "-5px"}} src={AWSPicture} alt="AWSPicture" width="100"/></Col>
      <Col className="Contact-profile-skill"><img style={{margin: "5px"}} src={GitPicture} alt="GitPicture" width="100"/></Col>
    </Row>
    </div>
  )
}

export default Contact;
