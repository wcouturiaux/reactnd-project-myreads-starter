import React from 'react';
import {Link} from 'react-router-dom'
import Book from './book'

class Shelf extends React.Component {
  state = {

  }

  render() {

    return (
      <div>
        <Link
          to='/search'
            className='open-search'>
              Open
        </Link>
        <div>Book Shelf</div>
      </div>
    )
  }
}

export default Shelf
