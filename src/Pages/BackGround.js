import React from 'react';
import { Container } from 'react-bootstrap';
import puzzle from '../images/puzzle.png'
const BackGround = ({children}) => {
  const backgroundStyle = {
    backgroundImage: `url(${puzzle})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '90vh',
  };

  return (
    <div style={backgroundStyle}>
      <Container>{children}</Container>
    </div>
  );
};

export default BackGround;