import React from 'react';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <Container>
      <img src={`https://cdn.prod.website-files.com/642535c7875ea6e60927dd49/65cb115f23533388f1d0b7e2_DevDynamics_Logo.svg`} alt='logo.svg' />
      <Title>Developer Activities Dashboard</Title>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

