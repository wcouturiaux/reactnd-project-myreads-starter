import React from 'react'
import {Link} from 'react-router-dom'
import Book from './book'

class Shelf extends React.Component {

  render() {

    return (

      <div>
        <Link to='/search' className='open-search'> Search Books </Link>
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.filter(books=>books.shelf===this.props.shelf).map((book)=>(
                <div key={book.id}>
                  <Book title={book.title} authors={book.authors} img={book.imageLinks.smallThumbnail} changeShelf={this.props.changeShelf} book={book}/>
                </div>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
