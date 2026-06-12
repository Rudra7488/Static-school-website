import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Principal from '../components/Principal';
import Academics from '../components/Academics';
// import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import AdmissionForm from '../components/AdmissionForm';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Principal />
      <Academics />
      {/* <Facilities /> */}
      <Gallery />
    </>
  );
};

export default Home;
