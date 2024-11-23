import React from 'react';
import './App.css';
import Header from './components/Header';
import EventOverview from './components/EventOverview';
import Highlights from './components/Highlights';
import Topics from './components/Topics';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhyAttendSection from './components/hero';
import AutoMovingCarousel from './components/Carousal';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <EventOverview />
      <Highlights />
      <Topics />
      <WhyAttendSection /> 
      <AutoMovingCarousel/>
      <Footer />
    </div>
  );
}

export default App;
