import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; 

export const Header = () => {
    return (
        <header className='bg-rose-500 flex flex-row-reverse'>
            <Popup trigger=
                {<button> About </button>}
                modal nested>
                {
                    close => (
                        <div className='modal flex flex-col 
                        justify-around justify-items-center content-center items-center gap-
                        font-sub-body text-lg'>
                            <div className='content'>
                                Can't go to the cafe today? Don't worry! We brought your favourite cafe ambience to your room.
                                Enjoy and feel free to customize it to your own liking~
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </header>
    )
}
