import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from './containers';

import { Cta, Brand, Navbar } from './components';
import './App.css';
import { FiArrowUpCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 500
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    };
    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  return (
    <div className="App">
      <svg width="0" height="0">
        <linearGradient
          id="purple-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#ae67fa" offset="0%" />
          <stop stopColor="#f49867" offset="100%" />
        </linearGradient>
      </svg>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      {showScrollButton && (
        <FiArrowUpCircle
          className="scroll--arrow-up"
          onClick={handleScrollToTop}
          size={50}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '1rem',
            cursor: 'pointer',
            fill: 'url(#purple-gradient)',
          }}
        />
      )}
    </div>
  );
};

export default App;
