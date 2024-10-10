// src/pages/HomePage.tsx
import React from 'react';
import { NeumorphicButton } from '@/components/NeumorphicButton/NeumorphicButton';
import { GlassCard } from '@/components/GlassCard/GlassCard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  text-align: center;
  font-family: 'Poppins', sans-serif;

`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Title>NoSmokeZone</Title>
      <Description>Добро пожаловать в ваше путешествие к здоровой жизни!</Description>
      <GlassCard>
        <p>Следите за своим прогрессом, достигайте новых высот и присоединяйтесь к сообществу единомышленников.</p>
      </GlassCard>
      <NeumorphicButton>Начать</NeumorphicButton>
    </Container>
  );
};
