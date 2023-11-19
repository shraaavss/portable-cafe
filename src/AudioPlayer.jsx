import React, { useState, useRef } from "react";
import song from "./assets/rain-sound.mp3";

const AmbientSoundPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // Initial volume set to 50%
  const audioRef = useRef(new Audio(song));

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
      <p>{isPlaying ? "Song is Playing" : "Song is Paused"}</p>
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

// import React, { useState, useRef, useEffect } from "react";

// const AmbientSoundPlayer = ({ soundPath, label }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(50); // Initial volume set to 50%
//   const audioRef = useRef(new Audio());

//   useEffect(() => {
//     const audio = audioRef.current;

//     // Set the source when the component mounts or when soundPath changes
//     audio.src = soundPath;

//     // Set initial volume and loop property
//     audio.volume = volume / 100;
//     audio.loop = true;

//     // Clean up when the component unmounts
//     return () => {
//       audio.pause();
//       audio.src = '';
//     };
//   }, [soundPath, volume]);

//   const playPause = () => {
//     const audio = audioRef.current;

//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume / 100;
//   };

//   return (
//     <div>
//       <h2>{label}</h2>
//       <p>{isPlaying ? "Sound is Playing" : "Sound is Paused"}</p>
//       <button onClick={playPause}>Play | Pause</button>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         step="1"
//         value={volume}
//         onChange={handleVolumeChange}
//       />
//       <span>{`Volume: ${volume}%`}</span>
//     </div>
//   );
// };

// export default AmbientSoundPlayer;
