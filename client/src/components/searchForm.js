import React from "react";
const FontAwesome = require('react-fontawesome');

export default function SearchForm(props) {
    return (
        <div>
            <form>
                <div className="form-group my-4">
                    <label>Find books:</label><span className="text-danger ml-2">{ props.blank_error }</span>
                    <input type="text" id="search_title" name="searchBook" className="form-control p-2" placeholder="Title (required)" value={props.search} onChange={props.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-success" onClick={props.handleSubmit}><FontAwesome className='mr-2' name='arrow-alt-circle-right' />Submit</button>
            </form>
        </div>
    );
}