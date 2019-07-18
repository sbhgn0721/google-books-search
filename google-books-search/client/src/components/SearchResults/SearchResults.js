import React from "react";
import "./SearchResults.css";

const SearchResults = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-header">
                Results

            </div>
            <div className="card-body">

            </div>


        </div>
    ) : (
            <div className="card">
                <div className="card-header">
                    Results
            </div>
                <div className="card-body">
                    {props.books.map(book => {
                        return (
                            <div className="card mb-3" id={book.title + "Card"} key={book._id}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={book.image} alt={book.title} />
                                    </div>


                                    <div className="col-md-8" id="book-info">
                                        <div className="card-body">
                                            <h5 className="card-title">{book.title}</h5>
                                            <div className="card-text">
                                                <h6>{book.author}</h6>
                                                <p>{book.description}</p>
                                                <a href={book.link} className="viewBook btn btn-primary">View</a>
                                                <button className="saveBook btn btn-success" id={book.id} onClick={(event) => props.handleSavedButton(event)}>Save</button>
                                            </div>
                    
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                    }

                </div>

            </div>
        )
}

export default SearchResults;