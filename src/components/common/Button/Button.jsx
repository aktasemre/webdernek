import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Button; 