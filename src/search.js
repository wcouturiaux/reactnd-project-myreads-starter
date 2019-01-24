import React from 'react'
import {Link} from 'react-router-dom'

class search extends React.Component {
  state = {

  }

  render() {

    return (
      <Link
        to='/'
          className='close-search'>
            Close
      </Link>
      <div>Book Search</div>
    )
  }
}

export  default search
