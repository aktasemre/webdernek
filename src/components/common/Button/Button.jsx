import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  text,
  onClick,
  variant = 'primary',
  disabled = false,
  className = ''
}) => {
  const buttonClasses = `${styles[variant]} ${className}`.trim();
  
  return (
    <button 
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button; 