import React from 'react';

function Home() {
    const styles = {
        backgroundColor: "#ffffff",
        textAlign: "center"
    };

    return (
        <div style={styles}>
            <h3 className="py-2 mb-4">Welcome to Google Book Search!</h3>
            <p>From here you can search for books by title on Google Books. You can also save any of the books from the search results.</p>
            <a href="/search" class="btn btn-primary btn-lg mr-5 mt-4" role="button">Search</a>
            <a href="/saved" class="btn btn-success btn-lg ml-5 mt-4" role="button">Saved</a>
        </div>
    );
}

export default Home;