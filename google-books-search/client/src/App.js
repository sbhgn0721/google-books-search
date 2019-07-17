import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import SavedBo from "./pages/Saved";
import HomePage from "./pages/HomePage";
//import NoMatch from "./pages/NoMatch";
import NavTabs from "./components/NavTabs/NavTabs";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer"
import BookSearch from "./components/BookSearch/BookSearch"
//import SearchResults from "./components/SearchResults/SearchResults"

class App extends React.Component {
  render() {
    return (
      <Router>

        <div>
          <NavTabs />
          <Jumbotron />

          <Switch>
            <Route exact path="/" component={HomePage} />
            {/*
            <Route exact path="/saved" component={SavedResults} />
            <Route exact path="/saved/:id" component={SavedResults} />
            <Route component={NoMatch} />
            */}
          </Switch>
          <BookSearch />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
