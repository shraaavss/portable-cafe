import React, { useState, useRef } from "react";

const AmbientSoundPlayer = ({ soundPath, label }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // Initial volume set to 50%
  const audioRef = useRef(new Audio(soundPath));

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

  // Set the loop property to true for continuous playback
  audioRef.current.loop = true;

  return (
    <div>
      <h2>{label}</h2>
      <p>{isPlaying ? "Sound is Playing" : "Sound is Paused"}</p>
      <button onClick={playPause}>Play | Pause</button>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={handleVolumeChange}
      />
      <span>{`Volume: ${volume}%`}</span>
    </div>
  );
};

export default AmbientSoundPlayer;
