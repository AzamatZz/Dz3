const initialState = {
    title: 'old title',
    aboutTitle: 'old about title',
    contactsTitle: ''
}

export default function reducer(state = initialState, action) {
    if (action.type === 'CHANGE_TITLE') {
        return {...state, title: 'new title',}
    } else if (action.type === 'CHANGE_ABOUT_TITLE') {
        return {...state, aboutTitle: 'new about title'}
    } else if (action.type === 'WITH_PARAMS') {
        return {...state, contactsTitle: action.payload}
    } else if (action.type === 'FROM_INPUT') {
        return {...state, contactsTitle: action.payload}
    }

    return state;
}