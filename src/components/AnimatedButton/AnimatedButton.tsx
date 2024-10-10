import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = styled(motion.button)`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
`;

export const AnimatedButton: FC<AnimatedButtonProps> = ({ children, ...props }) => (
  <Button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </Button>
);
