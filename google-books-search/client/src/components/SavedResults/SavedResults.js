import React from "react";
import "./SavedResults.css";

const SavedResults = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="crad-header">
                Saved Books

            </div>
            <div className="card-body">

            </div>

        </div>
    ) : (
        <div className="card">
            <div className="crad-header">
                Saved Books

            </div>
            <div className="card-body">

            </div>

        </div>

    )
}

export default SavedResults;