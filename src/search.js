import React from 'react'
import {Link} from 'react-router-dom'
import Shelves from './shelves'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class Search extends React.Component {
  state = {
    query:''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }


  render() {
    let searchedBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      searchedBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      searchedBooks = this.props.books
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => {
              this.setState({query: event.target.value})
            }}/>
          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            <Shelves books={searchedBooks} changeShelf={this.changeShelf}/>
          </ol>
        </div>
      </div>
    )
  }
}

export  default Search

/*
  NOTES: The search from BooksAPI is limited to a particular set of search terms.
  You can find these search terms here:
  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
  you don't find a specific author or title. Every search is limited by search terms.
*/
