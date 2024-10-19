import React, { useState } from 'react';
import CreateHuddle from './CreateHuddle';

const HuddleSelection = () => {
  const [selectedHuddleType, setSelectedHuddleType] = useState('');

  const handleHuddleTypeClick = (huddleType) => {
    setSelectedHuddleType(huddleType);
  };

  if (selectedHuddleType) {
    return <CreateHuddle huddleType={selectedHuddleType} />;
  }

  return (
    <div style={selectionStyle}>
      <h2>Create New Huddle</h2>
      <p>Select a template to customize:</p>
      <button onClick={() => handleHuddleTypeClick('daily')} style={buttonStyle}>
        Daily Huddle
      </button>
      <button onClick={() => handleHuddleTypeClick('weekly')} style={buttonStyle}>
        Weekly Huddle
      </button>
      <button onClick={() => handleHuddleTypeClick('monthly')} style={buttonStyle}>
        Monthly Huddle
      </button>
      <button onClick={() => handleHuddleTypeClick('one_on_one')} style={buttonStyle}>
        One on One
      </button>
    </div>
  );
};

const selectionStyle = { textAlign: 'center', padding: '20px' };
const buttonStyle = { padding: '10px', margin: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' };

export default HuddleSelection;
