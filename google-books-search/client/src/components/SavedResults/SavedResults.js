import React from "react";
import "./SavedResults.css";

const SavedResults = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-header">
                Saved Books

            </div>
            <div className="card-body">

            </div>

        </div>
    ) : (
        <div className="card">
            <div className="card-header">
                Saved Books

            </div>
            <div className="card-body">
            {props.savedBooks.map(savedBook => {
                        return (
                            <div className="card mb-3" id={savedBook.title + "Card"} key={savedBook._id}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={savedBook.image} alt={savedBook.title} />
                                    </div>


                                    <div className="col-md-8" id="book-info">
                                        <div className="card-body">
                                            <h5 className="card-title">{savedBook.title}</h5>
                                            <div className="card-text">
                                                <h6>{savedBook.author}</h6>
                                                <p>{savedBook.description}</p>
                                                <a href={savedBook.link} className="savedBook btn btn-primary">View</a>
                                                <button className="deleteBook btn btn-success" id={savedBook._id} onClick={() => props.handleDeleteButton(savedBook._id)}>Delete</button>
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

export default SavedResults;