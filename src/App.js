import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import CustomScrollbar from './components/CustomScrollbar';
import Projects from './components/Project';

function App() {
  return (
    <div className='Apps'>
      <><Nav />
    <Header />
    <CustomScrollbar />
    <Projects/>
    </>

    </div>
    
  );
}

export default App;


