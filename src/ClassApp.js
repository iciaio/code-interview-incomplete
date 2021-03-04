import React, { Component } from 'react';
import {connect} from 'react-redux'
import DisplayBooks from "./DisplayBooks";
import {deleteBookAction, loadBooksAction} from "./reducers/actions";
import booksData from "./data.json";
import {getBooks} from "./reducers/selectors";

export class ClassApp extends Component {
  constructor() {
    super();
  }

  handleClickToLoadBooks = () => {
    this.props.loadBooks(booksData);
  }

  //TODO: capture ISBN input from the text field
  //TODO: remove the book from the redux store when delete button is clicked

  render() {
    return (
      <div style={{margin: 30}}>
        <h1>
          Welcome to Circadence's Front End Interview!
          <br/>
          (AKA Alicia's Favorite Books)
        </h1>
        <h2>
          See README for instructions to get started!
        </h2>
        <button onClick={this.handleClickToLoadBooks} style={{margin: 30}}>
          Load Books
        </button>
        <label htmlFor='bookToDelete'>ISBN of book to delete: </label>
        <input name='bookToDelete'/>
        <button name="deleteButton" style={{margin: 30}}>Delete Book</button>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <DisplayBooks books={this.props.books}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassApp);

function mapStateToProps(state){
  return {
    books: getBooks(state)
  }
}

function mapDispatchToProps (dispatch){
  return {
    loadBooks: (books) => dispatch(loadBooksAction(books)),
  }
}