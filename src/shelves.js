import React from 'react'
import Shelf from './shelf'

let shelves = [ {title: 'Currently Reading', getBooks:'currentlyReading'},
                   {title: 'Want to Read', getBooks: 'wantToRead'},
                   {title: 'Read', getBooks: 'read'}
                 ]

class Shelves extends React.Component {


  render() {
    return(

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
              {shelves.map((shelf)=>(
                <div key={shelf.id}>
                <Shelf title={shelf.title} books={this.props.books} shelf={shelf.getBooks} changeShelf={this.props.changeShelf} />
                </div>
              ))}
        </div>
      </div>
    )
  }
}

export default Shelves
