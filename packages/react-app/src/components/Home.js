import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default function Home({ onSignIn }) {

  return (
    <div className="container-center"> 
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="100"/>
    <h1>This is React 17 application !</h1>
    <h2>React Homepage</h2>
    <Link to='/signup'>Internal link</Link>
   </div>
  );
}