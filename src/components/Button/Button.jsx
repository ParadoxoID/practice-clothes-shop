import React from 'react';
import './Button.scss';

// Убрал для styled-components так как делал это только для теста
// import { CustomButtonContainer } from './Button.styles';

const Button = ({ children, ...props }) => (
  <button className="custom-button" {...props}>
    {children}
  </button>
);

export default Button;
