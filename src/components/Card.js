import React from 'react';

function Card({ card, index }) {
  return (
    <div className="card" style={{ '--animation-delay': `${index * 0.5}s` }}>
      <h3>{card.name}</h3>
      <img src={card.image} alt={card.name} />
      <p>{card.meaning}</p>
    </div>
  );
}

export default Card;
