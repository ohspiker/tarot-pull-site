import React, { useState } from 'react';
import OneCardSpread from './components/OneCardSpread';
import ThreeCardSpread from './components/ThreeCardSpread';
import CelticCrossSpread from './components/CelticCrossSpread';
import './styles.css';

function App() {
  const [selectedSpread, setSelectedSpread] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (spreadName) => {
    setSelectedSpread(spreadName);
    setActiveButton(spreadName); // Set the clicked button as active
  };

  const renderSpread = () => {
    switch (selectedSpread) {
      case 'one-card':
        return <OneCardSpread />;
      case 'three-card':
        return <ThreeCardSpread />;
      case 'celtic-cross':
        return <CelticCrossSpread />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div class="header-container"> 
        <h1>Tarot Pull</h1>
      </div>
      <div className="button-container">
        <button
          className={`btn circle ${activeButton === 'one-card' ? 'active' : ''}`}
          onClick={() => handleClick('one-card')}
        >
          1
        </button>
        <button
          className={`btn circle ${activeButton === 'three-card' ? 'active' : ''}`}
          onClick={() => handleClick('three-card')}
        >
          3
        </button>
        <button
          className={`btn circle ${activeButton === 'celtic-cross' ? 'active' : ''}`}
          onClick={() => handleClick('celtic-cross')}
        >
          10
        </button>
      </div>
      {renderSpread()}
    </div>
  );
}

export default App;
