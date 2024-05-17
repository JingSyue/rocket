import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import AboutUsSection from './components/AboutUsSection';
import MilestonesSection from './components/MilestonesSection';
import './styles/index.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <WelcomeSection scrollY={scrollY} />
        <AboutUsSection scrollY={scrollY} />
        <MilestonesSection scrollY={scrollY} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
