import React, { Component } from "react";
import SearchForm from '../components/searchForm';
import SearchResults from '../components/searchResults';
import api from '../utils/api';

class Search extends Component {
    state = {
        searchBook: "",
        books: [],
        num_books_message: "",
        blank_error: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.searchBook) {
            this.setState({ blank_error: "This field cannot be left blank!" });
        } else {
            this.setState({ blank_error: "" });
            api.searchBooks(this.state.searchBook)
                .then(res => {
                    if (!res.data.items) {
                        this.setState({ num_books_message: "No books found!", books: [] });
                    } else {
                        let books = 0;
                        if (res.data.totalItems > 10) {
                            books = "...showing the first 10 of " + res.data.totalItems + " books found";
                        } else {
                            books = res.data.items.length + " books found!";
                        }
                        this.setState({ num_books_message: books });
                        let results = res.data.items;
                        results = results.map(result => {
                            const author = typeof result.volumeInfo.authors !== "undefined" ? result.volumeInfo.authors.join(", ") : "n/a";
                            const description = typeof result.volumeInfo.description !== "undefined" ? result.volumeInfo.description : "n/a";
                            const thumbnail = typeof result.volumeInfo.imageLinks.thumbnail !== "undefined" ? result.volumeInfo.imageLinks.thumbnail : "";
                            const link = typeof result.volumeInfo.infoLink !== "undefined" ? result.volumeInfo.infoLink : "";
                            result = {
                                key: result.id,
                                id: result.id,
                                title: result.volumeInfo.title,
                                author: author,
                                description: description,
                                image: thumbnail,
                                link: link
                            }
                            return result;
                        });
                        this.setState({ books: results });
                    }
                })
                .catch(err => console.log(err));
        }
    };

    handleSaveButton = id => {
        // console.log(id);
        let savedBooks = this.state.books.filter(book => book.id === id);
        // console.log(savedBooks[0]);
        api.saveBook(savedBooks[0])
            .then(alert("Your book is saved"))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <h3 className="p-2">Search for books!</h3>
                <SearchForm
                    blank_error={this.state.blank_error}
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <SearchResults books={this.state.books} handleSaveButton={this.handleSaveButton} search_massage={this.state.num_books_message} />
            </div>
        );
    }
}

export default Search;