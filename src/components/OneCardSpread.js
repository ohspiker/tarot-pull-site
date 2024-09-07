import React, { useState } from 'react';
import tarotDeck from './tarotDeck';
import Card from './Card';

function OneCardSpread() {
  const [card, setCard] = useState(null);

  const pullCard = () => {
    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    setCard(randomCard);
  };

  return (
    <div class="one-card">
      <h2>One Card Pull</h2>
      <button onClick={pullCard}>Pull a Card</button>
      {card && <Card card={card} />}
    </div>
  );
}

export default OneCardSpread;
