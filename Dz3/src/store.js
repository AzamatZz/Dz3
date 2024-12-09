
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { booksReducer } from './reducers/booksReducer';

const rootReducer = combineReducers({
    books: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
