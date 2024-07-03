import React from 'react';
import logo from './Logo.png'; // Assurez-vous d'importer le chemin correct du logo
import './App.css'; // Assurez-vous que le chemin est correct

export function Auth() {
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
