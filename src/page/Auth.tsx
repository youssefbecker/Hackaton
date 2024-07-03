import React from 'react';
import logo from './logo.jpg';
import './App.css';

 export function Auth() {
    return (
        <div className="App">
          <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
            <div className="App-message">
              authentification éffectuée avec succès !!
            </div>
          </header>
        </div>
      );
}
