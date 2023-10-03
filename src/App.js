import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import CustomScrollbar from './components/CustomScrollbar';
import Projects from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
function App() {


  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 20 });
  return (

    
    <div className='Apps' ref={scrollRef}>
      <><Nav />
      <Header />
      <Projects/>
      <Footer/>
      <CustomScrollbar />
      
    </>

    </div>
    
  );
}

export default App;


