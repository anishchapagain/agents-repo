import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MASTFramework from './components/MASTFramework';
import ResearchMethodology from './components/ResearchMethodology';
import KeyFindings from './components/KeyFindings';
import PracticalApplications from './components/PracticalApplications';
import AuthorsSection from './components/AuthorsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-animation">
          <div className="loading-circle"></div>
          <p className="loading-text">Loading Research...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main>
          <HeroSection />
          <MASTFramework />
          <ResearchMethodology />
          <KeyFindings />
          <PracticalApplications />
          <AuthorsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
