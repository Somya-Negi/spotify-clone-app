import React from 'react';
import '../src/Login.css';
import { loginUrl } from '../src/spotify';

export const Login = () => {
  return(
 <div className="login">
 <h1>Login Page</h1>
 <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-768x234.jpg" alt="spotify-logo"/>
 <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
 </div>

  );

}