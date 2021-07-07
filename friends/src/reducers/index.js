import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE, ADD_FRIENDS_START, ADD_FRIENDS_SUCCESS, ADD_FRIENDS_FAILURE } from '../actions';

const initialState = {
    friends: [],
    isFetching: false,
    error: '',
    isAdding: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                friends: action.payload
            };
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ADD_FRIENDS_START:
            return {
                ...state,
                isAdding: true,
                error: ''
            };
        case ADD_FRIENDS_SUCCESS:
            return {
                ...state,
                isAdding: false,
                error: '',
                friends: action.payload
            };
        case ADD_FRIENDS_FAILURE:
            return {
                ...state,
                isAdding: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default reducer;