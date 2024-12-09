
import {
    SEARCH_BOOKS_REQUEST,
    SEARCH_BOOKS_SUCCESS,
    SEARCH_BOOKS_FAILURE,
} from '../actions/booksActions';

const initialState = {
    books: [],
    loading: false,
    error: null,
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SEARCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.payload,
            };
        case SEARCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
