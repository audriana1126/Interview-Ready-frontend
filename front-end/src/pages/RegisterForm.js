import  {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import React from 'react';

const RegisterForm = ({signUp}) => {
  const initialState = { name: "", username: "", password: "", email: ""};
  const [input, setInput] = useState(initialState);
	const navigate = useNavigate()

  const [userState, setuserState] = useState(initialState);

  
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const createdUserToken = await signUp(input)



  //   if (createdUserToken) {
  //     navigate("/login")
  //   } else {
  //     navigate("/login")
  //   }
	// 	setInput(initialState);
  // };


  const url = 'https://interview-ready.herokuapp.com/auth/register'
  const context = {
    headers: {
      "Content-type": 'Application/json'
    },
    method: "POST",
    body: JSON.stringify(input)
  }
  fetch(url, context)
  .then(response=>response.json())
  .then(response=>{
    console.log('back-end response',response)
    localStorage.setItem('token', JSON.stringify(response))
    navigate('/profile')
  })
  .catch(err=>console.log(err))

  setuserState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={input.username}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          onChange={handleChange}
          value={input.password}
          
        />
        <br />
        <br />
        <button type="submit" > Register</button>
    </form>
    
  );
}

export default RegisterForm;

