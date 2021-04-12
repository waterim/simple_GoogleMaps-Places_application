import React from 'react';
import './LocateButton.scss';

const LocateButton = ({ panTo }) => {
    return (
        <button
            title='locateButton'
            className='locateButton'
            onClick={() => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            panTo({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            });
                        },
                        () => null
                    );
                }
            }}
        >
            <i className='fas fa-compass'></i>
        </button>
    );
};

export default LocateButton;
