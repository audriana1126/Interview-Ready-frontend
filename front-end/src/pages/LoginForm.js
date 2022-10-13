import { useState } from 'react';
import React from 'react';
import {useNavigate} from 'react-router-dom'

function LoginForm() {
  const initialState = { username: '', password: '' };
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate()

  const [userState, setuserState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const logout = () => {
    localStorage.removeItem('token')
    // Redirect user to login page
    navigate('/login')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the data in the component state
    console.log(formState);

    setTimeout(() => {
      localStorage.setItem('token', 'set-user-token')

      //redirect to chat
      navigate('/career')
    }, 1000)

    // clear the form
    setuserState(initialState);

  };
  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        onChange={handleChange}
        value={formState.username}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={formState.password}
      />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;

