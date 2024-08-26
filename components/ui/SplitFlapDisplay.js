import React, { useState, useEffect, useRef } from 'react';

const characters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,!?-_'.split('');

const SplitFlapDisplay = ({ targetText }) => {
  const [currentChars, setCurrentChars] = useState([]);
  const flapsRef = useRef([]);

  // ... (rest of the code is the same) 

  const animateFlap = (index, targetChar) => {
    const flap = flapsRef.current[index];
    if (!flap) return;

    const currentChar = flap.children[0].textContent; // Get content from child span
    const startIndex = characters.indexOf(currentChar);
    const endIndex = characters.indexOf(targetChar.toUpperCase());

    let rotationCount = (endIndex - startIndex + characters.length) % characters.length;
    if (rotationCount > characters.length / 2) {
      rotationCount -= characters.length;
    }

    // Update flap content before applying rotation:
    flap.children[0].textContent = targetChar.toUpperCase(); 
    flap.style.transitionDuration = `${Math.abs(rotationCount) * 0.1}s`;
    flap.style.transform = `rotateX(${rotationCount * -180}deg)`;
  };

  return (
    <div className="split-flap-display">
      {targetText.split('').map((_, index) => (
        <div key={index} className="flap-container">
          <div ref={el => (flapsRef.current[index] = el)} className="flap">
            <span>A</span> {/* Initial content in a regular span */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SplitFlapDisplay;