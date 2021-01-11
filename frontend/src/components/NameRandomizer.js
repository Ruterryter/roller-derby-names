import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import { rollIn } from 'react-animations';


const rollInAnimation = keyframes`${rollIn}`;

const AnimationDiv = styled.div`
  animation: 0.8s ${rollInAnimation};
`

const RollerDerbyName = styled.h4`
  display: flex;
  justify - content: center;
  color: #fff;
  margin - top: 20px;
  font-family: 'Lato', sans-serif;
`
const DerbyImage = styled.img`
  width: 100px;
  height: 100px;
`


const url = 'https://derby-names.herokuapp.com/rollerderbynames'


export const NameRandomizer = () => {
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
      <RollerDerbyName>Your name is: {yourName.firstName} {yourName.lastName} </RollerDerbyName>
      <AnimationDiv>
        <DerbyImage src={require("../assets/034-disco-ball.png")} />
      </AnimationDiv>
    </>
  );
}

