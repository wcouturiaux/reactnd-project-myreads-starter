import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class Search extends React.Component {
  state = {
    books:[],
    searchResults: [],
    query:''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

  updateQuery = (query) => {
    this.setState({query: query},
    this.search
  )
  }

  search = () => {
    if (this.state.query === '' || this.state.query === undefined) {
      return this.setState({
        searchResults: []
      })
    }
    BooksAPI.search(this.state.query.trim())
      .then((response) => {
        if (response.error) {
          return this.setState({
            searchResults:[]
          })
        } else {
          response.forEach(bk => {
            let matches = this.state.books.filter(B=> B.id === bk.id);
            bk.shelf = matches[0] ? matches[0].shelf : 'none';
          });
          return this.setState({
            searchResults: response
          })
        }
      })
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value = {this.state.query} onChange={(event) => {
              this.updateQuery(event.target.value)
            }}/>
          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {this.state.searchResults.map((book) => {
              return(
                <Book key={book.id} book={book} title={book.title} changeShelf = {this.props.changeShelf} img={book.hasOwnProperty('imageLinks') ? book.imageLinks.smallThumbnail:undefined} authors = {book.authors} />
              )
            })}
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
