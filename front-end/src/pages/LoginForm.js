import { useState } from 'react';
import React from 'react';
import {useNavigate} from 'react-router-dom'
// import Main from '../components/Main';

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
      
      <h1 className="Login">Login</h1>

      {/* <label className='loginLabel' htmlFor="username">Username:</label> */}
      <div className='container'>
        <div className='container2'>
          <input
            className="loginInput"
            id="loginUsername"
            placeholder='Username'
            type="text"
            onChange={handleChange}
            value={formState.username}
            />
        </div>
      {/* <label className='loginLabel' htmlFor="password">Password:</label> */}
      <div className='container2'>
          <input
            className="loginInput"
            id="loginPassword"
            placeholder='Password'
            type="password"
            onChange={handleChange}
            value={formState.password}
            />
      </div>
      </div>
      <div className='container'>
          <button className='loginSubmit' type="submit">Login</button>
      </div>
    </form>
  );
}
export default LoginForm;

