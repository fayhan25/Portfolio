import React from 'react';
import { Container } from 'react-bootstrap';
import background from '../images/homebackground.jpg'
const BackGround = ({image,children}) => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: '50%',
    backgroundPosition: 'right 35% bottom 85%',
    minHeight: '10vh',
  };

  return (
    <div style={backgroundStyle}>
      <Container>{children}</Container>
    </div>
  );
};

export default BackGround;