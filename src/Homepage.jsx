import React, { useState } from 'react';
import Spotify from './Spotify';
import './General.css';
import { Header } from './Header';

import AmbientSoundPlayer from './AudioPlayer';
import rain from "./assets/rain-sound.mp3";
import beanPour from './assets/coffee-bean-pour-into-pan.mp3';
import dripCof from './assets/drip-coffee-maker.mp3';
import people from './assets/people-talking2.mp3';
import pouring from './assets/pouring-coffee.mp3';
import cofpour from './assets/cofeepour.png';

export default function Homepage() {

  return (
    <div className="mainwrap flex flex-col h-screen">
      <Header />

      <div className="flex flex-grow p-10 items-center">

        <div className="subwrap flex flex-row w-full justify-around items-center justify-items-center">

          <div className="block1 flex-1">
            <h1 className="text-6xl font-title text-title-brown mb-2">Your Cafe</h1>
            <h3 className="subtitle text-xl font-body text-title-brown">Hi there, how may I help you?</h3>
            <Spotify />
          </div>

          <div className="block2 flex-1 text-center">
            <img src={cofpour} alt="Girl pouring coffee" className="mx-auto max-w-full h-auto" />
          </div>

          <div className="block3 flex flex-col p-3">
            <AmbientSoundPlayer soundPath={rain} label="Rainy Day" />
            <br />
            <AmbientSoundPlayer soundPath={beanPour} label="Bean Pour" />
            <br />
            <AmbientSoundPlayer soundPath={dripCof} label="Drip Coffee" />
            <br />
            <AmbientSoundPlayer soundPath={people} label="People Talking" />
            <br />
            <AmbientSoundPlayer soundPath={pouring} label="Pouring" />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}