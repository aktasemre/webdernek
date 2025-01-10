import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
  return (
    <button 
      className={styles[variant]} 
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button; 