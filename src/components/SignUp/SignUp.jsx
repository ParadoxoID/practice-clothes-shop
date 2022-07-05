import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.scss';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { confirmPassword, displayName, email, password } = state;

  const handleSubmit = async e => {
    e.preventDefault();

    if (state.password !== state.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );

      await createUserProfileDocument(user, { displayName });

      setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
