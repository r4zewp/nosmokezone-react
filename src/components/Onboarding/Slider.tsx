// src/components/Onboarding/Slider.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SliderProps {
  slide: {
    title: string;
    description: string;
    accent: string;
  };
}

const SlideContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #F4F4F6;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

const Accent = styled.p`
  font-size: 16px;
  color: #40C4FF;
  font-weight: bold;
`;

export const Slider: React.FC<SliderProps> = ({ slide }) => {
  return (
    <SlideContainer
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Title>{slide.title}</Title>
      <Description>{slide.description}</Description>
      <Accent>{slide.accent}</Accent>
    </SlideContainer>
  );
};
