import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode; // Explicitly define the type for children
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
