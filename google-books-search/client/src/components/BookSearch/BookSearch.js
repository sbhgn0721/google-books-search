import React from "react";
import "./BookSearch.css";

const BookSearch = () => {
    return (
        <div className="card">
            <div className="card-header">
                <p id="card-title">Book Search</p>

            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="book-name-input" placeholder="Enter book's name"></input>
                        <button type="submit" className="btn btn-primary"><p id="search-button">Search</p></button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default BookSearch;