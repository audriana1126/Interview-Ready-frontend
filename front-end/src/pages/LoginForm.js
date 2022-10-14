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

    // Delete this afterwards
      // const url = 'https://interview-ready.herokuapp.com/user'
      // fetch(url)
      // .then(res=>res.json())
      // .then(res=>{
      //   if(res){
      //     const result = res.find(item=>item.id === '6344a575b8981dae2c48ae9c')
      //     //console.log('result',result)
      //     localStorage.setItem('token', JSON.stringify(result))
      //     navigate('/profile')
      //   }
      // })
      // .catch(err=>console.log(err))
    // End of Delete this afterwards

    const url = 'https://interview-ready.herokuapp.com/auth/login'
    const context = {
      headers: {
        "Content-type": 'Application/json'
      },
      method: "POST",
      body: JSON.stringify(formState)
    }
    fetch(url, context)
    .then(response=>response.json())
    .then(response=>{
      console.log('back-end response',response)
      localStorage.setItem('token', JSON.stringify(response))
      navigate('/profile')
    })
    .catch(err=>console.log(err))

    // setTimeout(() => {
    //   localStorage.setItem('token', 'set-user-token')

    //   //redirect to chat
    //   navigate('/career')
    // }, 1000)

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

