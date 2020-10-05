import React, { useState, useEffect } from 'react';
import { CatergoryButton } from './CatergoryButton';


// Structure set up:
// Pick the emoji that is you, choose from: 
// skull, kitten, clown, lipstick
// Onclick => randomly choose a name from the chosen category - prints it out 
// Resetbutton - choose a new name

const url = 'https://derby-names.herokuapp.com/rollerderbynames'


const Randomizer = () => {
  const [yourName, setYourName] = useState({ firstName: "", lastName: "" })

  useEffect(() => {
    fetch(url)

      .then((res) => res.json())
      .then((names) => {
        setYourName(names[Math.floor(Math.random() * names.length)])

        // const yourRollerDerbyName = (names[Math.floor(Math.random() * names.length)])
        //setYourName(yourRollerDerbyName)
      })
  }, [])



  return (
    <>
      {/* <p>Pick the emoji that represent you the most</p> */}

      <div>Your name is: {yourName.firstName} {yourName.lastName} </div>


    </>
  );
}




export default Randomizer;