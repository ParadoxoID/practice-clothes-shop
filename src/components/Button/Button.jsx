import React from 'react';

import { CustomButtonContainer } from './Button.styles';

// import './Button.scss';

const Button = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default Button;
