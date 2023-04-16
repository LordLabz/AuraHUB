import React from 'react';

const Comms = () => {
    return (
        <div>

            <h1 style={{ textAlign: 'center' }}>Aura Comms 🛰️</h1>
            <iframe
                src="https://comms.auraexchange.org/"
                width="100%"
                height="800"
                frameBorder="0"
                allowFullScreen
                title="Embedded Site"
            >
                Your browser does not support iframes.
            </iframe>
        </div>
    );
};

export default Comms;
