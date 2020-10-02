import React, { useState } from 'react';
import { CatergoryButton } from './components/CatergoryButton';
import Randomizer from './components/Randomizer';



export function App() {
  const [randomizerVisible, setRandomizerVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Get your own cool Roller Derby Name here!
        </p>
        <CatergoryButton title="Get your Roller Derby Name"
          emoji="🐶" onClick={() => setRandomizerVisible(true)}
        />
      </header>
      <Randomizer visible={randomizerVisible} />
    </div>
  );
}


export default App;
