import React, { useState, useRef, useEffect } from "react";
import PlayIcon from "./assets/play.svg";
import PauseIcon from "./assets/pause.svg";
import VolIcon from './assets/volume.svg';

const AmbientSoundPlayer = ({ soundPath, label }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // Initial volume set to 50%
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;

    // Set the source when the component mounts or when soundPath changes
    audio.src = soundPath;

    // Set initial volume and loop property
    audio.volume = volume / 100;
    audio.loop = true;

    // Clean up when the component unmounts
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [soundPath, volume]);

  const playPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  return (
    <div>
      <div className="flex items-center font-sub-body font-bold text-lg">
        <h2 className="mr-2">{label}</h2>
        <button onClick={playPause}>
          {isPlaying ? (
            <img src={PauseIcon} alt="Pause" />
          ) : (
            <img src={PlayIcon} alt="Play" />
          )}
        </button>
      </div>

      <div className="flex flex-row gap-1 items-center">
      <img src={VolIcon} alt="Volume Icon" />
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
      </div>
      
    </div>
  );
};

export default AmbientSoundPlayer;
