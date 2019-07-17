import React from "react";
import "./SearchResults.css";

const SearchResults = props => {
    return (props.boooks.length === 0) ? (
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
                


            </div>


        </div>
    )
}

export default SearchResults;