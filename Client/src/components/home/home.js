import React from 'react';
import './home.css'

export default function Home(){
    return(
        <div class="log-form">
  <h2 className="loginheader">Login to your account</h2>
  <form>
    <input type="text" title="username" placeholder="username" />
    <input type="password" title="username" placeholder="password" />
    <button type="submit" class="btn">Login</button>
  </form>
</div>
    )}