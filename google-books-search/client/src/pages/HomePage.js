import React, {Component} from "react";
import API from "../utils/API";
import BookSearch from "../components/BookSearch/BookSearch";
import SearchResults from "../components/SearchResults/SearchResults"


class HomePage extends Component {
    state = {
        search: "",
        books: [],
        message: ""
        
    }


handleInputChange =  event => {
    this.setState({ search: event.target.value })
}

handleFormSubmit =  event => {
    event.preventDefault();
    API.googleBooksSearch(this.state.search)
    .then(res => {
        let results = res.data.items
        results = results.map(result => {
            result = {
                key: result.id,
                id: result.id,
                title: result.volumeInfo.title,
                author: result.volumeInfo.authors,
                description: result.volumeInfo.description,
                image: result.volumeInfo.imageLinks.thumbnail,
                link: result.volumeInfo.infoLink
            }
            return result;
        })
        this.setState({books: results})
    })
    .catch(err => console.log(err))
}

handleSavedButton = event => {
    event.preventDefault();
    console.log(this.state.books)
    let savedBooks =  this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
    .then(this.setSate({message: alert("Your book is saved!")}))
    .catch(err => console.log(err))
}

render() {
    return(
    <div>
        <BookSearch
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        />
        <SearchResults books={this.state.books} handleSavedButton={this.handleSavedButton}
        />
    </div>
    )
    
}

}

export default HomePage