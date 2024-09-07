import React, { useState } from 'react';
import tarotDeck from './tarotDeck'; // Assuming tarotDeck is imported from the correct path

function ThreeCardSpread() {
  const [cards, setCards] = useState([]);

  const pullCards = () => {
    // Clear the cards to trigger a fresh animation
    setCards([]);

    // Brief delay before pulling new cards to ensure the animation resets
    setTimeout(() => {
      const shuffledDeck = [...tarotDeck].sort(() => 0.5 - Math.random());
      setCards(shuffledDeck.slice(0, 3)); // Pull 3 random cards
    }, 100); // 100ms delay before dealing new cards
  };

  return (
    <div className="three-card-spread">
      <h2>Three Card Pull</h2>
      <button onClick={pullCards}>Pull 3 Cards</button>

      {cards.length === 3 && (
        <div className="spread">
          {cards.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{ '--animation-delay': `${index * 0.5}s` }} // Staggered animation delay
            >
              <h4>{index === 0 ? 'Past' : index === 1 ? 'Present' : 'Future'}</h4> {/* Labels */}
              <img src={card.image} alt={card.name} />
              <h3>{card.name}</h3>
              <p>{card.meaning}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThreeCardSpread;
