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
                <div className="content">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="auth-message">
                        <h1 className="Home-message"> <p>Bienvenue</p> <p>dans votre espace utilisateur</p> </h1>
                    </div>
                    <div className="Success-message">
                        Authentification effectuée avec succès!
                    </div>
                </div>
                
            </header>
        </div>
    );
}
