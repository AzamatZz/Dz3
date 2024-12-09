
import React from 'react';
import { Provider } from 'react-redux';
import BookSearch from './components/BookSearch';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Поиск книги</h1>
                <BookSearch />
            </div>
        </Provider>
    );
};

export default App;
