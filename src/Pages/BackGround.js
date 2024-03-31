import React from 'react';
import { Container } from 'react-bootstrap';
import cube from '../images/cube.jpg'
const BackGround = ({children}) => {
  const backgroundStyle = {
    backgroundImage: `url(${cube})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <Container>{children}</Container>
    </div>
  );
};

export default BackGround;