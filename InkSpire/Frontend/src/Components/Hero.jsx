import React, { useState, useEffect } from 'react';
import './Hero.css';

import sam from '../assets/sam.png';
import gatsby from '../assets/greatgatsby.png';
import metamorphosis from '../assets/metomorphosis.png';
import twistedhate from '../assets/twistedhate.png';
import artofwar from '../assets/artofwar.png';

const books = [
  { img: sam, title: 'You’ve Reached Sam', class: 'body-sam' },
  { img: gatsby, title: 'The Great Gatsby', class: 'body-gatsby' },
  { img: metamorphosis, title: 'Metamorphosis', class: 'body-morph' },
  { img: twistedhate, title: 'Twisted Hate', class: 'body-hate' },
  { img: artofwar, title: 'The Art of War', class: 'body-war' }
];

function HomeHero() {
  const [index, setIndex] = useState(0);

  const nextBook = () => {
    setIndex((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  useEffect(() => {
    // Remove the previous background class
    document.body.className = '';
    // Add the current book background class
    document.body.classList.add(books[index].class);

    return () => {
      document.body.classList.remove(books[index].class);
    };
  }, [index]);

  return (
    <section className="hero-section">
      {/* Hero Text Section */}
      <div className="hero-left">
        <h1>Your Digital Library, Reimagined,<br /><span>Inkspire</span> – Where Stories Come to Life.</h1>
        <p>📖 <strong>Read. Write. Inspire.</strong> ✨<br />
          Welcome to <strong>Inkspire</strong>, a next-gen digital library where books feel real.
          Flip through pages with lifelike animations, explore bestsellers, and personalize your reading experience.
        </p>
        <button className="start-button">Start Reading ➤</button>
      </div>

      {/* Carousel Section */}
      <div className="hero-right">
        <h2 className="bestseller-title">BESTSELLERS</h2>
        <div className="carousel-box">
          <button className="carousel-btn left" onClick={prevBook}>‹</button>
          <img src={books[index].img} alt={books[index].title} className="carousel-img" />
          <button className="carousel-btn right" onClick={nextBook}>›</button>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
