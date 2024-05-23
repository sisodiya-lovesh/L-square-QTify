import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './styles/variables.css';
import HeroSection from './components/HeroSection/HeroSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
    </div>
  );
};

export default App;
