import { axiosWithAuth } from '../auth/axiosWithAuth';

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const ADD_FRIENDS_START = "ADD_FRIENDS_START";
export const ADD_FRIENDS_SUCCESS = "ADD_FRIENDS_SUCCESS";
export const ADD_FRIENDS_FAILURE = "ADD_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
        // .then(res => console.log(res.data))
        .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.response }));
}

export const addFriend = (friend) => dispatch => {
    dispatch({ type: ADD_FRIENDS_START });
    axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => console.log("POST!!!", res.data))
        .catch(err => console.log("POST!!!", err))
        // .then(res => dispatch({ type: ADD_FRIENDS_SUCCESS, payload: res.data }))
        // .then(res => console.log(res.data))
        // .catch(err => dispatch({ type: ADD_FRIENDS_FAILURE, payload: err.response }));
}

