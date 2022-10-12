// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Main from './components/Main';
// import RegisterForm from './components/RegisterForm';
// import {setUserToken, clearUserToken} from './utils/authToken.js'
import {useState, useEffect} from 'react'

// function HelloWorld() {
//   return (
//     <header>
//       <h1>Hello</h1>
//       <h2>World</h2>
//     </header>
//   )
// }


// function Header() {
//   return (
//     <h1>This</h1>
//   )
// }

function App() {
  return (
    <div className="App">
      <Main />
    </div>
);
}
//     // <div className="App">
//     //   <Header />
//     //   <LoginForm />
//     //   <Main />
//     //   <RegisterForm />
//     // </div>

export default App;
// export default HelloWorld;
