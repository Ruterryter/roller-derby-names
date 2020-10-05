import React, { useState } from 'react';
import { CatergoryButton } from './components/CatergoryButton'
import Randomizer from './components/Randomizer'
import { Footer } from './components/Footer'
import styled from 'styled-components'



const AppWrapper = styled.div`
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 375px;
  width: 100%;
  background-color: #FFA52C;
  justify-content: center;
  align-items: center;
`
const Heading = styled.h1`
  display: flex;
  color: #FFF;
  width: 400px;
  margin-top: 80px;

  &:hover {
    text-decoration: none;
    color: #86007D;

  @media (max-width: 768px) {
  font-size: 24px;
}
 
`
const SkaterIcon = styled.img`
  display: flex;
  width: 200px;
  height: 200px;
`
const Main = styled.div`
  widht: 100%;
  height: 400px;
`



export function App() {
  const [randomizerVisible, setRandomizerVisible] = useState(false);
  const onClick = () => setRandomizerVisible(true)
  return (
    <AppWrapper>
      <Header>
        <Heading>
          Get your Roller Derby Name here!
        </Heading>
        <SkaterIcon src={require("./assets/roller-skate-big.png")} />
      </Header>
      <Main>
        <CatergoryButton title="Get your Roller Derby name"
          emoji="⚡" onClick={onClick}
        />
        {randomizerVisible ? <Randomizer /> : null}
      </Main>
      <Footer />
    </AppWrapper>
  );
}


export default App;
