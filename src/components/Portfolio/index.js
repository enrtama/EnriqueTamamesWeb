import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import WorkIcon from 'react-icons/lib/fa/briefcase';
import SchoolIcon from 'react-icons/lib/io/android-person';
import PlaneIcon from 'react-icons/lib/fa/plane';

import './styles.css';

const Portfolio = (props) => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2007 - 2011"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <span className="vertical-timeline-element-tag">DB</span>
        <span className="vertical-timeline-element-tag">OS</span>
        <span className="vertical-timeline-element-tag">Soft.Engineer</span>
        <span className="vertical-timeline-element-tag">Mathematics</span>
        <span className="vertical-timeline-element-tag">Physics</span>
        <h3 className="vertical-timeline-element-title">Computer Science Degree</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Valladolid, Spain</h4>
        <p>
          Database Engineering, Software development, Physics, Mathematics, Operating Systems Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2011 - 2012"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <span className="vertical-timeline-element-tag">.NET</span>
        <span className="vertical-timeline-element-tag">Zesdaagse</span>
        <span className="vertical-timeline-element-tag">Lotto Zesdaagse</span>
        <span className="vertical-timeline-element-tag">Web Dev.</span>
        <h3 className="vertical-timeline-element-title">Erasmus</h3>
        <h4 className="vertical-timeline-element-subtitle">KATHO, Kortrijk (Belgium)</h4>
        <p>
          Final Project, Mobile development, .NET programmer
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - 2013"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <span className="vertical-timeline-element-tag">CSS</span>
        <span className="vertical-timeline-element-tag">HTML</span>
        <span className="vertical-timeline-element-tag">Javascript</span>
        <span className="vertical-timeline-element-tag">PHP</span>
        <h3 className="vertical-timeline-element-title">Web Designer/Programmer (Freelance)</h3>
        <h4 className="vertical-timeline-element-subtitle">Valladolid, Spain</h4>
        <p>
          Design & Development of a website for a fashion designer
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2013 - 2015"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <span className="vertical-timeline-element-tag">CSS</span>
        <span className="vertical-timeline-element-tag">HTML</span>
        <span className="vertical-timeline-element-tag">Javascript</span>
        <span className="vertical-timeline-element-tag">PHP</span>
        <span className="vertical-timeline-element-tag">GIT</span>
        <span className="vertical-timeline-element-tag">Browsers</span>
        <h3 className="vertical-timeline-element-title">Frontend/Backend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Amsterdam, The Netherlands</h4>
        <p>
          Work on a highly interactive project based on backbone.js & cakePHP
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015-2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <span className="vertical-timeline-element-tag">React</span>
        <span className="vertical-timeline-element-tag">Redux</span>
        <span className="vertical-timeline-element-tag">Webpack</span>
        <span className="vertical-timeline-element-tag">Jest</span>
        <span className="vertical-timeline-element-tag">AWS</span>
        <span className="vertical-timeline-element-tag">Jenkins</span>
        <h3 className="vertical-timeline-element-title">React Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Amsterdam, The Netherlands</h4>
        <p>
          Developing several project with ReactJS stack (Reflux, Redux, Webpack, AWS)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--plane"
        date="January-February 2018"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<PlaneIcon />}
      >
        <span className="vertical-timeline-element-tag">Sydney</span>
        <span className="vertical-timeline-element-tag">Tasmania</span>
        <span className="vertical-timeline-element-tag">PADI Diving</span>
        <span className="vertical-timeline-element-tag">Melbourne</span>
        <h3 className="vertical-timeline-element-title">Trip to Australia</h3>
        <h4 className="vertical-timeline-element-subtitle">Sydney, Tasmania, Melbourne</h4>
        <p>
          Trip for a month to Australia where a got the PADI Diver certificate
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Portfolio;
