import React from 'react';
import styled from 'styled-components'

const FooterWrapper = styled.div`
  background-color: #FFA52C;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AttributeLink = styled.a`
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  color: #FFF;

  &:hover {
    text-decoration: none;
    color: #86007D;
`

const AttributeTitle = styled.h5`
  font-family: 'Lato', sans-serif;
  color: #FFF;
`

export const Footer = (props) => {
  return (
    <FooterWrapper>
      <AttributeTitle>Icons made by <AttributeLink href="https://www.flaticon.com/authors/freepik" title="freepik">Freepik</AttributeLink> from <AttributeLink href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</AttributeLink></AttributeTitle>
    </FooterWrapper>
  );
}

