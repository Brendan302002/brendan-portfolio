import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import CustomScrollbar from './components/CustomScrollbar';
import Projects from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className='Apps'>
      <><Nav />
    <Header />
    <CustomScrollbar />
    <Projects/>
    <Contact/>
    <Footer/>
    </>

    </div>
    
  );
}

export default App;


