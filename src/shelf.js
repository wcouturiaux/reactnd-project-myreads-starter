import React from 'react';
import {Link} from 'react-router-dom'

class shelf extends React.Component {
  state = {
    
  }

  render() {
    <Link
      to='/search'
        className='open-search'>
          Open
    </Link>
    return (
      <div>Book Shelf</div>
    )
  }
}

export default shelf
