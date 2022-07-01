import React from 'react';
import './Button.scss';

const Button = ({ children, isGoogleButton, ...props }) => (
  <button className={`${isGoogleButton ? 'google-sign-in' : ''} custom-button`} {...props}>
    {children}
  </button>
);

export default Button;
