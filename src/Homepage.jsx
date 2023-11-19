import React from 'react';
import Spotify from './Spotify';
import cup from './/assets/coffeeeee.png';
import './General.css'
import AmbientSoundPlayer from './AudioPlayer';

export default function Homepage() {
    return (
        <div className="mainwrap w-screen h-screen flex flex-row flex-wrap 
        justify-around justify-items-center content-center items-center p-8">

            <div className="block1 basis-1/3">
                <h1 className="text-6xl font-title text-title-brown mb-2">Your Cafe</h1>
                <h3 className="subtitle text-xl font-body text-title-brown">Hi there, how may I help you?</h3>
                <Spotify />
            </div>

            <div className="block2 basis-1/3">
                <img src={cup} alt="" />
            </div>

            <div className="block3 basis-1/3">
                <AmbientSoundPlayer soundPath="./assets/rain-sound.mp3" label="Rain Sound" />
            </div>


        </div>
    )
}