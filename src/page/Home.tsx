import React from 'react';
import logo from './logo.jpg';
import './App.css';

 export function Home() {
    return (
        <div className="App">
          <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
            <div className="App-message">
              Scanner votre carte pour vous connecter
            </div>
          </header>
        </div>
      );
}
