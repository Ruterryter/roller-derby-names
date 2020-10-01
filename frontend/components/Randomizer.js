import React, { useState } from 'react';
import { CatergoryButton } from './CatergoryButton';


// Structure set up:
// Pick the emoji that is you, choose from: 
// skull, kitten, clown, lipstick
// Onclick => randomly choose a name from the chosen category - prints it out 
// Resetbutton - choose a new name

const nameUrl = ('https://derby-names.herokuapp.com/rollerderbynames')

const Randomizer = (props) => {
  const [yourName, setYourName] = useState([])
  const [loading, setLoading] = useState(true)
  const randomName = Math.floor(Math.random() * names.length)

  useEffect(() => {
    fetch('https://derby-names.herokuapp.com/rollerderbynames')
      .then((res) => res.json())
      .then((names) => {
        setYourName(randomName)
        setLoading(false)
      })
  }, [])

  return (
    <div>

      <p>Pick the emoji that represent you the most</p>
      {/* <CatergoryButton 
      emoji= {}
      category= {}
      onClick={}/> */}
      <div>Your name is: </div>
    </div>
  );
}

export default Randomizer;