import React from 'react';
// const FontAwesome = require('react-fontawesome');
// <FontAwesome className='mr-2' name='book-open' />

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light border-bottom sticky-top mb-4">
            <img src="images/books.png" alt="Google Book Search" className="mr-2" />
            <a className="navbar-brand" href="/">Google Book Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav text-right">
                    <a className="nav-item nav-link" href="/search">Search</a>
                    <a className="nav-item nav-link" href="/saved">Saved</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;