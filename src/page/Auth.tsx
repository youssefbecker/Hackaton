import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Successful authentication.png'; // Assurez-vous d'importer le chemin correct du logo
import './App.css'; // Assurez-vous que le chemin est correct

export function Auth() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="App">
            <div className="top-bar">
                <span className="top-bar-text">eLock</span>
            </div>
            <button className='back-button' onClick={handleBack}>Retour</button>

            <header className="App-header">
                <div className="content">
                    <img src={logo} className="App-logo-success" alt="logo" />
                    <div className="auth-message">
                        <h1 className="Home-message"> Bienvenue</h1>
                    </div>
                    <div className="Success-message1">
                        Authentification effectuée avec succès !
                    </div>
                </div>
                
            </header>
        </div>
    );
}
