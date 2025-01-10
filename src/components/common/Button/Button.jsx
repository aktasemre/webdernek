import styles from './Button.module.scss';

const Button = ({
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