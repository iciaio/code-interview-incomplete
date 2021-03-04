import React, { useReducer } from 'react';
import DisplayBooks from "./DisplayBooks";
import reducer from './reducers/reducer';
import booksData from './data.json';
import {loadBooksAction} from './reducers/actions';

const FunctionalApp = () => {

  const [state, dispatch] = useReducer(
    reducer,
    {books: []},
    (initialState)=> initialState
    );

  const handleClickToLoadBooks = () => {
    dispatch(loadBooksAction(booksData));
  }

  //TODO: capture ISBN input from the text field
  //TODO: remove the book from the redux store when delete button is clicked

  return (
    <div style={{margin: 30}}>
      <h1>
        Welcome to Circadence's Front End Interview! <br/> (AKA Alicia's Favorite Books)
      </h1>
      <h2>
        See README for instructions to get started!
      </h2>
      <button onClick={handleClickToLoadBooks} style={{margin: 30}}>Load Books</button>
      <label for='bookToDelete'>ISBN of book to delete: </label>
      <input name='bookToDelete'/>
      <button name="deleteButton" style={{margin: 30}}>Delete Book</button>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <DisplayBooks books={state.books}/>
      </div>
    </div>
  )
}

export default FunctionalApp;