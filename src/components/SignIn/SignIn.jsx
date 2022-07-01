import React, { useState } from 'react';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };

  const emailInputHandler = e => setEmail(e.target.value);
  const passwordInputHandler = e => setPassword(e.target.value);

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          handleChange={emailInputHandler}
          type="email"
          label="Email"
          required
        />
        <FormInput
          name="password"
          value={password}
          handleChange={passwordInputHandler}
          type="password"
          label="Password"
          required
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
