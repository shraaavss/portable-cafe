import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Header = () => {
    return (
        <div>
            <Popup trigger=
                {<button> About </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                We brought your fav cafe to your desktop!
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
        </div>
    )
}
