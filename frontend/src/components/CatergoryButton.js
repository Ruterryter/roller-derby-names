import React, { useState } from 'react';
import Randomizer from './Randomizer';


export const CatergoryButton = ({ emoji, onClick, title, }) => {

  return (
    <div>
      <button onClick={onClick} title={title}>
        <span role="img" aria-label="emoji">
          {emoji}
          {title}
        </span>
      </button>
    </div>
  );
}

