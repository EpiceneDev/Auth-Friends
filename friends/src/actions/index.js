import axios from 'axios';
import { axiosWithAuth } from '../auth/axiosWithAuth';

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
        // .then(res => console.log(res.data))
        .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.response }));
}