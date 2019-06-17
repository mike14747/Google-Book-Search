import React, { Component } from 'react';
import api from '../utils/api';
import SavedResults from '../components/savedResults';

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        api.getBooks()
            .then(res => console.log("respnse from getBooks api call"))
            .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        api.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3 className="p-2">Saved Books</h3>
                <SavedResults savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
            </div>
        );
    }
}

// api.getBooks()
// .then(res => this.setState({ savedBooks: res.data }))
// .catch(err => console.log(err))

export default Saved;