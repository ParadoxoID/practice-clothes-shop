import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase/firebase.utils';

import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import CartDropdown from '../CartDropdown/CartDropdown';
import CartIcon from '../CartIcon/CartIcon';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './Header.styles';

// import './Header.scss';

const Header = () => {
  const structuredSelector = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
  });
  const { currentUser, hidden } = useSelector(structuredSelector);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/contact">CONTACT</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={() => signOut(auth)}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
