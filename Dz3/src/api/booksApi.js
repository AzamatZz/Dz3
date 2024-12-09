// src/api/booksApi.js
import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

// Функция для поиска книг по запросу
export const searchBooks = async (query) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: query,
                maxResults: 10, // Ограничиваем количество результатов (например, 10)
            },
        });
        return response.data.items; // Возвращаем только книги из ответа
    } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error('Failed to fetch books.');
    }
};
