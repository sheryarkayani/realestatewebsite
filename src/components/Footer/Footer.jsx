
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/realtors">Realtors</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Find us on Social Media</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="site-policy">
          <h4>Site Policy</h4>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <p>© MGC Copyright 2023 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
