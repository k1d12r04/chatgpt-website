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

const App = () => {
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
      <FiArrowUpCircle
        className="scroll--arrow-up"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        size={50}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '1rem',
          cursor: 'pointer',
          fill: 'url(#purple-gradient)',
        }}
      />
    </div>
  );
};

export default App;
