import React, { useState, useEffect } from 'react';
import { CatergoryButton } from './CatergoryButton';
import styled from 'styled-components'

// Structure set up:
// Pick the emoji that is you, choose from: 
// skull, kitten, clown, lipstick
// Onclick => randomly choose a name from the chosen category - prints it out 
// Resetbutton - choose a new name

const RollerDerbyName = styled.h4`
  display: flex;
  justify-content: center; 
  color: #fff;
  margin-top: 50px;
  
`

const url = 'https://derby-names.herokuapp.com/rollerderbynames'


const Randomizer = () => {
  const [yourName, setYourName] = useState({ firstName: "", lastName: "" })

  useEffect(() => {
    fetch(url)

      .then((res) => res.json())
      .then((names) => {
        setYourName(names[Math.floor(Math.random() * names.length)])
      })
  }, [])



  return (
    <>
      {/* <p>Pick the emoji that represent you the most</p> */}

      <RollerDerbyName>Your name is: {yourName.firstName} {yourName.lastName} </RollerDerbyName>


    </>
  );
}




export default Randomizer;