import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are an online store providing great deals on the products you love.
              Our mission is to bring you the best shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="./Home.js" className="text-white">Home</a></li>
              <li><a href="/store" className="text-white">Store</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              mail: yossefjo165@gmail.com
            </p>
            <p>
              Phone: 01115633115
            </p>
            <div>
              <a href="https://www.facebook.com/yossef.ahmedfahmy.3" className="text-white me-2">facebook</a>
              <a href="https://www.twitter.com" className="text-white me-2">twitter</a>
              <a href="https://www.instagram.com/yossef__el3skry/" className="text-white me-2">instagram</a>
              <a href="https://www.linkedin.com/in/yossef-ahmed-a953952b7/" className="text-white">linkedin</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark text-center py-3 mt-4">
        <p className="mb-0">Designed and Developed by Youssef Fahmy © 2024</p>
        <p className="mb-0">All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
