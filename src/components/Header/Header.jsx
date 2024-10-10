import React from 'react';
import '../../styles/home.css';  // Adjusted path to correctly reference home.css

const Header = () => {
  return (
    <header>
      <div className="logo">MGC Real Estate</div>
      <nav>
        <ul>
          <li><a href="/projects">Our Projects</a></li>
          <li><a href="/realtors">Realtors</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
