import React from 'react'
import './General.css'

export default function Spotify() {
    return (

        <iframe 
        className='spotify-emb'
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXa1BeMIGX5Du?utm_source=generator" 
        frameBorder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
        </iframe>

    )
}
