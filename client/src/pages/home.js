import React from 'react';

function Home() {
    const styles = {
        backgroundColor: "#ffffff"
    };

    return (
        <div style={styles}>
            <h3 className="p-2">Welcome to Google Book Search!</h3>
            <p>From here you can search for books on Google.</p>
            <p>You can also saved any of the books from the search results.</p>
        </div>
    );
}

export default Home;