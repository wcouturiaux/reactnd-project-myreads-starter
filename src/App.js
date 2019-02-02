import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './search'
import Shelves from './shelves'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }



  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books});
  })}

  changeShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(() => {
      newBook.shelf = newShelf
      this.setState(state => ({
        books: state.books.filter(book => book.id !== newBook.id).concat([newBook])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/'
          render = {() => (<Shelves books={this.state.books} changeShelf={this.changeShelf} />)}
        />
        <Route exact path='/search'
          render = {() => (<Search changeShelf={this.changeShelf} books={this.state.books}/>)}
        />

      </div>
    )
  }
}

export default BooksApp
