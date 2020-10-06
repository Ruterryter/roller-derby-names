import React from 'react';
import styled from 'styled-components'

const NameButton = styled.button`
  background-color: #86007D;
  color: #ffff;
  font-weight: 700;
  text-transform: uppercase;
  outline: none;
  border: none;
  padding: 20px; 
  margin-top: 20px; 
  margin-bottom: 20px;
 
  &:hover {
    text-decoration: none;
    color: #FFA52C;
`
const ButtonTitle = styled.span`

`

const EmojiHolder = styled.span`
  margin: 10px;
`


export const NewNameButton = ({ onClick, title, emoji }) => {

  return (
    <>
      <NameButton onClick={onClick}>
        <EmojiHolder role="img" aria-label="emoji" >{emoji}</EmojiHolder>
        <ButtonTitle>{title}</ButtonTitle>
        <EmojiHolder role="img" aria-label="emoji" >{emoji}</EmojiHolder>
      </NameButton>
    </>
  );
}