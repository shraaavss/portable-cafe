import React from 'react';
import Spotify from './Spotify';
import './Homepage.css';

export default function Homepage() {
    return (
        <div className="mainwrap">

            <div className="block1">

                <h1 className="title">Your Cafe</h1>
                <h3 className="subtitle">Hi there, how may I help you?</h3>
                <Spotify />

            </div>

        </div>
    )
}
