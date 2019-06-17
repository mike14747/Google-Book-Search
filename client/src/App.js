import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/home';
import Saved from './pages/saved';
import Search from './pages/search';
import Error from './pages/error';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/saved" component={Saved} />
                    <Route exact path="/search" component={Search} />
                    <Route component={Error} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;