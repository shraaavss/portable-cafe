import React, { useState } from 'react';
import Spotify from './Spotify';
import cup from './/assets/coffeeeee.png';
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
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePauseAll = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="mainwrap flex flex-grow p-10 items-center">

        <div className="subwrap flex flex-row w-full justify-around items-center justify-items-center">

          <div className="block1 flex-1">
            <h1 className="text-6xl font-title text-title-brown mb-2">Your Cafe</h1>
            <h3 className="subtitle text-xl font-body text-title-brown">Hi there, how may I help you?</h3>
            <Spotify />
          </div>

          <div className="block2 flex-1 text-center">
            <img src={cofpour} alt="" className="mx-auto max-w-full h-auto" />
          </div>

          <div className="block3 flex-1">
            {isPlaying && (
              <button onClick={handlePauseAll} className="mb-4">
                Pause All Sounds
              </button>
            )}
            <AmbientSoundPlayer soundPath={rain} label="Rainy Day" setIsPlaying={setIsPlaying} />
            <br />
            <AmbientSoundPlayer soundPath={beanPour} label="Bean Pour" setIsPlaying={setIsPlaying} />
            <br />
            <AmbientSoundPlayer soundPath={dripCof} label="Drip Coffee" setIsPlaying={setIsPlaying} />
            <br />
            <AmbientSoundPlayer soundPath={people} label="People Talking" setIsPlaying={setIsPlaying} />
            <br />
            <AmbientSoundPlayer soundPath={pouring} label="Pouring" setIsPlaying={setIsPlaying} />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}