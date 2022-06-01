import React from 'react';
import './Home.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Home = () => (
  <>
    <div>
      <Navbar />
      <div className="content">
        <div id="home-page">
          <h2>Welcome to Maths Magician Home Page</h2>
          <div id="welcome-images">
            <img
              src="https://gifimage.net/wp-content/uploads/2017/10/math-gif-2.gif"
              alt="gif"
              height="200"
            />
            <img
              src="https://media.giphy.com/media/3cSVa9XSRGBMIJK3LG/giphy.gif"
              alt="gif"
              height="200"
            />
            <img
              src="https://media.giphy.com/media/5ddqGqO8x5rrJ7v5tf/giphy.gif"
              alt="gif"
              height="200"
            />
          </div>
          <p>
            We are having a Party and MATH is confused!
            <br />
            Perform some calculations on the calculator
          </p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Home;
