import React from 'react';
import {Link} from 'react-router-dom'
import book from './book'

class shelf extends React.Component {
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

export default shelf
