import React from "react";
import "./BookSearch.css";

const BookSearch = props => {
    return (
        <div className="card">
            <div className="card-header">
                <p id="card-title">Book Search</p>

            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="book-name-input" placeholder="Enter book's name"
                        value={props.search}
                        name="searchBook"
                        onChange={props.handleInputChange}
                        />
                        <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit}><p id="search-button">Search</p></button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default BookSearch;