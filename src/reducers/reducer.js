// import {getBooks} from './selectors'

const reducer = (state , action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
       return {books: action.payload};
    default:
      return {books: []}
  }
}

export default reducer;