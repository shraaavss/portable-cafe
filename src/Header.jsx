import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; 
import './General.css'

export const Header = () => {
    return (
        <header className='flex flex-row-reverse font-sub-body text-lg p-8'>
            <Popup trigger=
                {<button> About </button>}
                modal nested>
                {
                    close => (
                        <div className='popup modal flex flex-col 
                        justify-around justify-items-center content-center items-center gap-
                        font-sub-body text-lg box-border bg-light-brown p-4 rounded'>
                            <div className='content'>
                                Can't go to the cafe today? Don't worry! We brought your favourite cafe ambience to your room.
                                Enjoy and feel free to customize it to your own liking~
                            </div>
                            <div>
                                <button className='font-bold'
                                onClick=
                                    {() => close()}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </header>
    )
}
