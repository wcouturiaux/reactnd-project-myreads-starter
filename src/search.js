import React from 'react'
import {Link} from 'react-router-dom'
import Book from './book'

class Search extends React.Component {
  state = {
    query:''
  }

  render() {

    return (
      <div>
        <Link
          to='/'
            className='close-search'>
              Close
        </Link>
        <h2>Book Search</h2>
      </div>
    )
  }
}

export  default Search
