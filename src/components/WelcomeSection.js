import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import ThreeScene from './ThreeScene';
import '../styles/WelcomeSection.css';

const WelcomeSection = ({ scrollY }) => {
  const titleStyle = useSpring({
    opacity: scrollY > 50 ? 0 : 1,
    transform: scrollY > 50 ? 'translateY(-50px)' : 'translateY(0px)',
  });

  return (
    <section className="welcome-section">
      <animated.div style={titleStyle} className="welcome-title">
        Welcome to Rocket App
      </animated.div>
      <ThreeScene />
    </section>
  );
};

export default WelcomeSection;
