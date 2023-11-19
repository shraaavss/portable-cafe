import React from 'react';
import Spotify from './Spotify';
import cup from './/assets/coffeeeee.png';
import './General.css'

export default function Homepage() {
    return (
        <div className="mainwrap w-screen h-screen flex flex-row flex-wrap justify-around justify-items-center content-center items-center p-8">

            <div className="block1 basis-1/3">
                <h1 className="text-6xl font-title text-title-brown mb-2">Your Cafe</h1>
                <h3 className="subtitle text-xl font-body text-title-brown">Hi there, how may I help you?</h3>
                <Spotify />
            </div>

            <div className="block2 basis-1/3">
                <img src={cup} alt="" />
            </div>

            <div className="block3 basis-1/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus repudiandae vel, numquam est corporis doloremque 
                beatae modi accusamus enim culpa necessitatibus mollitia laboriosam fugiat laudantium, natus temporibus ipsa iusto. Lorem 
                ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta repudiandae consequuntur ab vel molestiae! Debitis culpa 
                odio voluptatum fugit est in nemo quas voluptate. Dolore et animi cumque placeat?
            </div>


        </div>
    )
}
// background-color: #DFD7BF;
// opacity: 1;
// background-image:  radial-gradient(#3C2A21 0.65px, transparent 0.65px), radial-gradient(#3C2A21 0.65px, #DFD7BF 0.65px);
// background-size: 26px 26px;
// background-position: 0 0,13px 13px;