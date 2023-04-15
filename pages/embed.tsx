import React from 'react';

const EmbedPage = () => {
    return (
        <div>
            <h1>Need to revoke permissions?</h1>
            <iframe
                src="https://revoke.cash/"
                width="100%"
                height="600"
                frameBorder="0"
                allowFullScreen
                title="Embedded Site"
            >
                Your browser does not support iframes.
            </iframe>
        </div>
    );
};

export default EmbedPage;
