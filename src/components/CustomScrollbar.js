import React, { useEffect, useState } from 'react';
import './CustomScrollbar.css'; 
import arrow from './assets/images/home.png';

function CustomScrollbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="custom-scrollbar">
      <div className="scrollbar-track">
        <div
          className="scrollbar-thumb"
          style={{ transform: `translateY(${(scrollY / document.body.scrollHeight) * 100}%)` }}
        ></div>
      </div>
      <button onClick={handleScrollToTop}><img src={arrow}></img></button>
    </div>
  );
}

export default CustomScrollbar;