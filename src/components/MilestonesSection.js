import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/MilestonesSection.css';

const MilestonesSection = ({ scrollY }) => {
  const milestones = [
    { year: '2021', description: 'Launched our first product' },
    { year: '2022', description: 'Reached 1 million users' },
    { year: '2023', description: 'Expanded to international markets' },
  ];

  return (
    <section className="milestones-section">
      {milestones.map((milestone, index) => (
        <div key={index} className="milestone">
          <animated.div className="milestone-content">
            <h3>{milestone.year}</h3>
            <p>{milestone.description}</p>
          </animated.div>
        </div>
      ))}
    </section>
  );
};

export default MilestonesSection;
