import React, { useState, useEffect } from 'react';
import { CatergoryButton } from './CatergoryButton';


// Structure set up:
// Pick the emoji that is you, choose from: 
// skull, kitten, clown, lipstick
// Onclick => randomly choose a name from the chosen category - prints it out 
// Resetbutton - choose a new name

const url = 'https://derby-names.herokuapp.com/rollerderbynames'


const Randomizer = () => {
  let [yourName, setYourName] = useState([])


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((names) => {
        let randomName = Math.floor(Math.random() * names.length)
        const yourRollerDerbyName = names.filter((index) => index.names === index)


        // { console.log(names[1].firstName) }

        // { console.log(yourName) }


        setYourName(randomName)

      })
  })

  return (
    <>
      <p>Pick the emoji that represent you the most</p>
      {/* <CatergoryButton 
      emoji= {}
      category= {}
      onClick={}/> */}
      <div> Name: {yourName}</div>
      <div>Your name is: {yourName.firstname, yourName.lastName}</div>

    </>
  );
}




export default Randomizer;