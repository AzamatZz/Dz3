
import axios from 'axios';

export const SEARCH_BOOKS_REQUEST = 'SEARCH_BOOKS_REQUEST';
export const SEARCH_BOOKS_SUCCESS = 'SEARCH_BOOKS_SUCCESS';
export const SEARCH_BOOKS_FAILURE = 'SEARCH_BOOKS_FAILURE';

export const searchBooks = (query) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_BOOKS_REQUEST });

        try {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
                params: {
                    q: query,
                    maxResults: 5,
                },
            });

            dispatch({
                type: SEARCH_BOOKS_SUCCESS,
                payload: response.data.items,
            });
        } catch (error) {
            dispatch({
                type: SEARCH_BOOKS_FAILURE,
                error: 'Ошибка',
            });
        }
    };
};
