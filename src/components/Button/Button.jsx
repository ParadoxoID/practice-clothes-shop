import React from 'react';
import './Button.scss';

const Button = ({ children, isGoogleButton, inverted, ...props }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleButton ? 'google-sign-in' : ''
    } custom-button`}
    {...props}>
    {children}
  </button>
);

export default Button;
