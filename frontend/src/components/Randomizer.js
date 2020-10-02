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
  let [yourRollerDerbyName, setYourRollerDerbyName] = useState([])


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((names) => {
        let randomName = Math.floor(Math.random() * names.length)
        //const yourRollerDerbyName = names.filter((index) => index.names === index) - används ej

        setYourName(randomName)
        // yourName retunerar då ett index, mappa över indexet och få fram firstName och lastName 

        //varför funkar inte denna? 
        let yourRollerDerbyName = yourName.map(user => {
          return (
            yourRollerDerbyName.push({ firstname: user.firstName, lastname: user.lastName, id: user._id, })
          )
        })
        setYourRollerDerbyName(yourRollerDerbyName)
      })
  })


  console.log(yourRollerDerbyName)



  return (
    <>
      {/* <p>Pick the emoji that represent you the most</p>
      {/* <CatergoryButton 
      emoji= {}
      category= {}
      onClick={}/> */}

      <div>Your name is: </div>



    </>
  );
}




export default Randomizer;