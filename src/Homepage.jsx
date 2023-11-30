import React from 'react';
import Spotify from './Spotify';
import cup from './/assets/coffeeeee.png';
import './General.css';
import { Header } from './Header';

import AmbientSoundPlayer from './AudioPlayer';
import rain from "./assets/rain-sound.mp3";
import beanPour from './assets/coffee-bean-pour-into-pan.mp3';
import dripCof from './assets/drip-coffee-maker.mp3';
import people from './assets/people-talking2.mp3'
import pouring from './assets/pouring-coffee.mp3'


export default function Homepage() {
    return (
        <>
            <Header />

            <div className="mainwrap w-screen h-screen flex p-8">

                <div className="subwrap flex flex-row flex-wrap 
            justify-around justify-items-center content-center items-center">
                    <div className="block1 basis-1/3">
                        <h1 className="text-6xl font-title text-title-brown mb-2">Your Cafe</h1>
                        <h3 className="subtitle text-xl font-body text-title-brown">Hi there, how may I help you?</h3>
                        <Spotify />
                    </div>

                    <div className="block2 basis-1/3">
                        <img src={cup} alt="" />
                    </div>

                    <div className="block3 basis-1/3">
                        <AmbientSoundPlayer soundPath={rain} />
                        <br />
                        <AmbientSoundPlayer soundPath={beanPour} />
                        <br />
                        <AmbientSoundPlayer soundPath={dripCof} />
                        <br />
                        <AmbientSoundPlayer soundPath={people} />
                        <br />
                        <AmbientSoundPlayer soundPath={pouring} />
                        <br />
                        <br />
                    </div>

                </div>

            </div>
        </>


    )
}