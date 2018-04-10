import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Row, Col } from 'reactstrap';

import './styles.css';
import ReactPicture from '../../assets/react.png';
import ReduxPicture from '../../assets/redux.png';
import ReduxSagaPicture from '../../assets/redux-saga.png';
import PHPPicture from '../../assets/php.png';
import AWSPicture from '../../assets/aws.png';
import GitPicture from '../../assets/git.png';

const data = [
    { subject: 'React', A: 90, fullMark: 100 },
    { subject: 'Redux', A: 90, fullMark: 100 },
    { subject: 'CSS', A: 75, fullMark: 100 },
    { subject: 'GIT', A: 85, fullMark: 100 },
    { subject: 'Testing', A: 75, fullMark: 100 },
    { subject: 'Responsive Design', A: 75, fullMark: 100 },
];

const Contact = (props) => {
  return (
    <div>
      <RadarChart cx={350} cy={300} outerRadius={150} width={700} height={600} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis/>
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
      </RadarChart>
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
