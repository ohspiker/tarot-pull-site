import React, { useState } from 'react';
import tarotDeck from './tarotDeck'; // Assuming tarotDeck is imported from the correct path

function CelticCrossSpread() {
  const [cards, setCards] = useState([]);

  const pullCards = () => {
    // Clear the cards to reset the animation
    setCards([]);

    // Brief delay before pulling new cards
    setTimeout(() => {
      const shuffledDeck = [...tarotDeck].sort(() => 0.5 - Math.random());
      setCards(shuffledDeck.slice(0, 10)); // Pull 10 random cards
    }, 100); // 100ms delay before dealing new cards
  };

  return (
    <div className="celtic-cross-spread">
      <h2>Celtic Cross Pull</h2>
      <button onClick={pullCards}>Pull 10 Cards</button>

      {cards.length === 10 && (
        <div className="celtic-cross">
          {cards.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{ '--animation-delay': `${index * 0.5}s` }} // Staggered animation delay
            >
              <h4>
                {index === 0 && 'Present / Situation'}
                {index === 1 && 'Challenge'}
                {index === 2 && 'Past / Subconscious'}
                {index === 3 && 'Future'}
                {index === 4 && 'Conscious Goals'}
                {index === 5 && 'Near Future'}
                {index === 6 && 'You'}
                {index === 7 && 'External Influences'}
                {index === 8 && 'Hopes and Fears'}
                {index === 9 && 'Outcome'}
              </h4>
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

export default CelticCrossSpread;
