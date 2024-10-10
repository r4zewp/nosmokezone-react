// src/pages/HomePage.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #D3D3D3; /* Светло-серый фон */
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 1;
  font-weight: bold;
  text-align: left;
  color: #000;
  margin-bottom: 40px;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: #EAEAEA; /* Цвет прямоугольника */
  border: 1px solid #333;
  margin-bottom: 40px;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Title>
        NO <br />
        SMOKE <br />
        ZONE.
      </Title>
      <Box />
      <Button>Begin your journey</Button>
    </Container>
  );
};

export default HomePage;
