import React from 'react';
import ReactDOM from 'react-dom';

export default function Header(){
    return(
        <nav>
          <img src={require('./react-logo.png')} width="40px"></img>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    )
  }