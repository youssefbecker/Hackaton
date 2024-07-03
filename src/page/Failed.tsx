import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Payment failed.png';
import './App.css'; 

export function Failed() {

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
                    <img src={logo} className="App-logo_failed" alt="logo" />
                   
                    <div className="Failed-message">
                        Authentification échouée !
                    </div>
                </div>
                
            </header>
        </div>
    );
}
