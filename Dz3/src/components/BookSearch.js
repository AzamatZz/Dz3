
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBooks } from '../actions/booksActions';

const BookSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state) => state.books);

    const handleSearch = () => {
        if (!query.trim()) return;
        dispatch(searchBooks(query));
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Название или автор"
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Поиск...' : 'Поиск'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                {books.length > 0 && (
                    <ul>
                        {books.map((book) => (
                            <li key={book.id}>
                                <h3>{book.volumeInfo.title}</h3>
                                <p>{book.volumeInfo.authors?.join(', ')}</p>
                                <p>{book.volumeInfo.publishedDate}</p>
                                {book.volumeInfo.imageLinks?.thumbnail && (
                                    <img
                                        src={book.volumeInfo.imageLinks.thumbnail}
                                        alt={book.title}
                                        width={100}
                                    />
                                )}
                                <p>{book.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default BookSearch;
