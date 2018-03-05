import React from 'react';

import Radar from 'react-d3-radar';

const Contact = (props) => {
  return (
    <div>
    <Radar
      width={550}
      height={550}
      padding={70}
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
          {key: 'responsiveDesign', label: 'Responsive Design'},
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
              versionControlGit: 10,
              responsiveDesign: 6,
              buildingAutomationTools: 8,
            }
          }
        ]
      }}
    />
    </div>
  )
}

export default Contact;
