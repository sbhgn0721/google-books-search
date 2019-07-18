import React from "react";

import "./NavTabs.css"

function NavTabs() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
            <a className="navbar-brand" href="/"><h2>Google Books Search</h2></a>


            <ul>

                <li className="nav-item" id="search"><a href="/"><h5>Search Books</h5></a></li>



                <li className="nav-item" id="saved"><a href="/saved"><h5>Saved Books</h5></a></li>


            </ul>

        </nav>

    )

}

export default NavTabs;