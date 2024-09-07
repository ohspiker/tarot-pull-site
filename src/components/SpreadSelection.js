import React from 'react';

function SpreadSelection({ setSelectedSpread }) {
  return (
    <div>
      <h2>Select a Tarot Spread</h2>
      <button onClick={() => setSelectedSpread('one-card')}>One Card Pull</button>
      <button onClick={() => setSelectedSpread('three-card')}>Three Card Spread</button>
      <button onClick={() => setSelectedSpread('celtic-cross')}>Celtic Cross Spread</button>
    </div>
  );
}

export default SpreadSelection;
