import React from 'react';
import { Routes, Route } from "react-router-dom"
import LoginForm from './LoginForm';
import { Link } from "react-router-dom";
import RegisterForm from './RegisterForm';

function Home () {

    return (
        <div>
        
          <Link to="/login" element={<LoginForm />} >
          <h1> Login</h1> 
          </Link>
          <Link to="/register" element={<RegisterForm />} >
          <h1> Register</h1> 
          </Link>

        </div>
  )}

  export default Home

  