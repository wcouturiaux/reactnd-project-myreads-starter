import React from 'react'

class Book extends React.Component {
  state = {
    currentShelf: this.props.book.shelf
  }

  changeShelf = (event) => {
    this.props.changeShelf(this.props.book, event.target.value);
    this.setState({
      currentShelf: event.target.value
    });
  }
  render () {
    return(

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.img})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.currentShelf} onChange={this.changeShelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}

export default Book
