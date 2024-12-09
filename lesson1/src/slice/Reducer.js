const initialState = {
    value: 0,
};

// Редюсер для обработки действий
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + 1 };
        case 'DECREMENT':
            return { ...state, value: Math.max(state.value - 1, 0) }; // Убедимся, что значение не будет ниже 0
        case 'INCREMENT_BY_TEN':
            return { ...state, value: state.value + 10 };
        case 'DECREMENT_BY_TEN':
            return {
                ...state,
                value: state.value >= 10 ? state.value - 10 : 0, // Убедимся, что значение не будет меньше 0
            };
        case 'RESET':
            return { ...state, value: 0 };
        default:
            return state;
    }
};

export default counterReducer;
