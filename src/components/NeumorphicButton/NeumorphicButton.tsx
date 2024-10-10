// src/components/NeumorphicButton.tsx
import styled from 'styled-components';

export const NeumorphicButton = styled.button`
  background: #1e1e1e;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #141414, -5px -5px 10px #282828;
  border: none;
  color: #ffffff;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: inset 5px 5px 10px #141414, inset -5px -5px 10px #282828;
  }
`;
