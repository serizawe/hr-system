import * as React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

  const Login = () => {

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
 
  

    

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [isLoading, setIsLoading] = React.useState(false);
  const [loginError, setLoginError] = React.useState(null);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('/api/login', { email, password });
      const token = response?.data?.token;
            const roles = response?.data?.roles;
            setAuth({ email, password, roles, token });
            setEmail('');
            setPassword('');
            navigate(from, { replace: true });
      
      // store the token in local storage or a cookie
      localStorage.setItem('token', token);
      localStorage.setItem('role', roles);
      // navigate to the protected page or do whatever you want with the token
    } catch (error) {
      setLoginError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = event => {
    const email = event.target.value;
    setEmail(email);
    if (email.indexOf("@") === -1 || !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  }

  const handlePasswordChange = event => {
    const password = event.target.value;
    setPassword(password);
    if (password.length < 8 || password.length > 24) {
      setPasswordError("Password must be between 8 and 24 characters.");
    } else {
      setPasswordError("");
    }
  }

  return (
  <div className="flex w-full mt-20 justify-center items-center">
    <div className="w-8/12 px-10 py-20 h-[85vh] rounded-2xl bg-white border-2 border-gray-300 shadow-2xl">
   
      <h1 className="text-6xl text-violet-500 font-bold">Log in</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Log in to your account
      </p>
      <div className="mt-8">
        <div className="flex flex-col">
          <label className="text-lg text-violet-500 font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <div className="flex flex-col mt-4 text-violet-500">
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
            type={"password"}
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>
          <div className="mt-8 flex justify-between items-center">
            
            <button className="font-medium text-base text-violet-500 hover:scale-110 ease-in-out transform">
              Forgot password
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-6">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03]  ease-in-out transform py-4 bg-zinc-600 rounded-xl text-white font-bold text-lg" onClick={handleSubmit}>
           Sign in
          </button>
          {isLoading && <p>Loading...</p>}
          {loginError && <p className="text-red-500">{loginError}</p>}
        </div>
      </div>
    </div>
  </div>
  );
}; export default Login
