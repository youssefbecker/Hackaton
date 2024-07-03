import React from 'react';
import logo from './Logo.png';
import './App.css';

export function Home() {
    return (
        <div className="App">
            <div className="top-bar">
                <span className="top-bar-text">eLock</span>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-message">
                    Scanner votre carte pour vous connecter
                </div>
            </header>
        </div>
    );
}
