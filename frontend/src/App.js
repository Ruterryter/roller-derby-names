import React, { useState } from 'react';
import { CatergoryButton } from './components/CatergoryButton';
import Randomizer from './components/Randomizer';



export function App() {
  const [randomizerVisible, setRandomizerVisible] = useState(false);
  const onClick = () => setRandomizerVisible(true)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Get your own cool Roller Derby Name here!
        </p>
        <CatergoryButton title="Get your Roller Derby Name"
          emoji="⚡" onClick={onClick}
        />
        {randomizerVisible ? <Randomizer /> : null}
      </header>



    </div>
  );
}


export default App;
