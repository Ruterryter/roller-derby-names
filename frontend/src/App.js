import React, { useState } from 'react'
import styled from 'styled-components'
import { DerbyNameButton } from './components/DerbyNameButton'
import { NameRandomizer } from './components/NameRandomizer'
import { Footer } from './components/Footer'
import { NewNameButton } from './components/NewNameButton'
import { Header } from './components/Header'


const AppWrapper = styled.div`
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  widht: 100%;
  height: 400px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export function App() {
  const [randomizerVisible, setRandomizerVisible] = useState(false);
  const onClick = () => setRandomizerVisible(true)
  const newName = () => setRandomizerVisible(false)


  return (
    <AppWrapper>
      <Header />
      <Main>
        <DerbyNameButton title="Get your Roller Derby name"
          emoji="⚡" onClick={onClick}
        />
        {randomizerVisible ? <NameRandomizer /> : null}
        {randomizerVisible ? <NewNameButton title={"Give me a new name!"} onClick={newName} emoji="💎" /> : null}
      </Main>
      <Footer />
    </AppWrapper>
  );
}

export default App;
