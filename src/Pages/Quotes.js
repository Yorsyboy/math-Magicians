import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './Quotes.css';
import image1 from '../images/q1.jpg';
import image2 from '../images/q2.jpg';
import image3 from '../images/q3.jpg';

const Quotes = () => (
  <>
    <Navbar />
    <div>
      <div id="quote-images">
        <img src={image1} alt="" height="200px" />
        <img src={image2} alt="" height="200px" />
        <img src={image3} alt="" height="200px" />
      </div>
    </div>
    <Footer />
  </>
);

export default Quotes;
