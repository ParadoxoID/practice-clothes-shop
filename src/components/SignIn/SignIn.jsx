import React, { useState } from 'react';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
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

        <div className="buttons">
          <Button type="submit">Sign In</Button>{' '}
          <Button isGoogleButton onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
