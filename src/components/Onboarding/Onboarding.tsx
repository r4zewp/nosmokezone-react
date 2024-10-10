// src/components/Onboarding/Onboarding.tsx
import React, { useState } from 'react';
import { Slider } from './Slider';
import styled from 'styled-components';

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2C2C2E;
  color: #F4F4F6;
`;

const SliderNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? '#40C4FF' : '#888')};
  transition: background-color 0.3s;
`;

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Здоровье – это свобода',
      description: 'Каждая выкуренная сигарета сокращает вашу жизнь и снижает качество вашего здоровья. Избавьтесь от вредной привычки, чтобы стать свободнее и здоровее.',
      accent: 'Восстановите свои лёгкие и продлите жизнь!',
    },
    {
      title: 'Ваши деньги в ваших руках',
      description: 'Курение стоит дорого. Вы удивитесь, сколько денег можно сэкономить, отказавшись от сигарет.',
      accent: 'Откажитесь от сигарет и сделайте более полезные вложения в свою жизнь.',
    },
    {
      title: 'Вы не одиноки',
      description: 'С нами бросить курить легче. Приложение будет отслеживать ваш прогресс, помогать с мотивацией и напоминаниями.',
      accent: 'Поддержка единомышленников на каждом шаге пути.',
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete(); // Завершаем онбординг, когда все слайды просмотрены
    }
  };

  return (
    <OnboardingContainer>
      <Slider slide={slides[currentSlide]} />
      <SliderNavigation>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
        ))}
      </SliderNavigation>
      <button onClick={handleNext}>
        {currentSlide < slides.length - 1 ? 'Далее' : 'Начать'}
      </button>
    </OnboardingContainer>
  );
};

export default Onboarding;
