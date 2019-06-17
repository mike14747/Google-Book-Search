import React from "react";
const FontAwesome = require('react-fontawesome');

export default function SavedResults(props) {
    return (props.savedBooks.length === 0) ? (
        <div className="my-4">
            You have no saved books!
        </div>
    ) : (
            <div className="my-4">
                {props.savedBooks.map((book, i) => {
                    return (
                        <div key={i} style={{ border: "1px solid #4477aa" }} className="row no-gutters my-4">
                            <div className="col-12">
                                <h5  style={{ backgroundColor: "#4477aa" }} className="text-light p-2">{book.title}</h5>
                                <div className="row no-gutters">
                                    <div className="col-6 p-2">
                                        <span className="font-weight-bolder small">Author(s): </span>{book.author}
                                    </div>
                                    <div className="col-6 text-right">
                                        <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn btn-warning px-3 m-2" role="button"><FontAwesome className='mr-2' name='eye' />View</a>
                                        <button id={book.id} className="btn btn-light px-3 m-2" value="{book.id}" onClick={() => props.handleDeleteButton(book.id)}><FontAwesome className='mr-2' name='trash-alt' />Delete Book</button>

                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-12 p-2">
                                        <img src={book.image} alt={book.title} className="float-left mr-4" />
                                        <span className="font-weight-bolder small">Description: </span>{book.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
}