import React from 'react';
import logo from './Logo.png';
import './App.css';

 export function Auth() {
    return (
        <div className="App">
            <div className="top-bar">
                <span className="top-bar-text">eLock</span>
            </div>
          <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
            <div className="App-message">
              authentification éffectuée avec succès !!
            </div>
          </header>
        </div>
      );
}
