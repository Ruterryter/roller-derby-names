import React from 'react';
import styled from 'styled-components'


const HeaderWrapper = styled.header`
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
  margin-top: 70px;
  font-family: 'Permanent Marker', cursive;
  font-size: 42px;

  &:hover {
    text-decoration: none;
    color: #86007D; }

  @media (max-width: 768px) {
    width: 350px;}
}
`

const SkaterIcon = styled.img`
  display: flex;
  width: 200px;
  height: 200px;
 `

export const Header = (props) => {
  return (
    <HeaderWrapper>
      <Heading>
        Get your Roller Derby Name here!
        </Heading>
      <SkaterIcon src={require("../assets/roller-skate-big.png")} />
    </HeaderWrapper>
  );
}