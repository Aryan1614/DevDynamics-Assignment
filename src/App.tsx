import React from 'react';
import Dashboard from './components/Dashboard';
import styled, { createGlobalStyle } from 'styled-components';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <NavBar/>
        <Dashboard />
      </AppContainer>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
  }
`;

const AppContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
