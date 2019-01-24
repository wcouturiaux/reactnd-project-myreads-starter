import React from 'react'
import {Link} from 'react-router-dom'
import book from './book'

class search extends React.Component {
  state = {

  }

  render() {

    return (
      <div>
        <Link
          to='/'
            className='close-search'>
              Close
        </Link>
        <div>Book Search</div>
      </div>
    )
  }
}

export  default search
