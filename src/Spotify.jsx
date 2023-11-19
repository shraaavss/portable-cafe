import React from 'react'
import './General.css'

export default function Spotify() {
    return (
        <iframe
        className='spotify-emb'
            src="https://open.spotify.com/embed/playlist/6arNynV9KQfMCc5HtfHAOV?utm_source=generator&theme=0"
            frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>
    )
}
