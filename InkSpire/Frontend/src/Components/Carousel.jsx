import React, { useState, useEffect } from 'react';
import './Carousel.css';

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

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextBook = () => {
    setIndex((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  useEffect(() => {
    // Update background class on body
    document.body.className = '';
    document.body.classList.add(books[index].class);

    return () => {
      document.body.classList.remove(books[index].class);
    };
  }, [index]);

  return (
    <div className="carousel-box">
      <button className="carousel-btn left" onClick={prevBook}>‹</button>
      <img src={books[index].img} alt={books[index].title} className="carousel-img" />
      <button className="carousel-btn right" onClick={nextBook}>›</button>
    </div>
  );
}

export default Carousel;
