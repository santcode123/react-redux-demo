import axios from 'axios';
import ActionTypes from "./actionTypes"

const startFetchingUsers = () => {
    return {
        type: ActionTypes.START_FETCHING_USERS
    }
};

const userFetchFailure = (errorMsg) => {
    return {
        type: ActionTypes.FETCHING_USERS_FAILURE,
        payload: {
            errorMsg
        }
    }
}

const userFetchSuccess = (users) => {
    return {
        type: ActionTypes.FETCHING_USERS_SUCCESS,
        payload: {
            users,
        }
    }
}


const fetchUsers = () => {
    return (dispatch) => {
        dispatch(startFetchingUsers());
        axios.get("https://jsonplaceholder.typcode.com/users").then(response => {
            dispatch(userFetchSuccess(response.data));
        }).catch(err => {
            dispatch(userFetchFailure(err));
        })
    }
}


export { startFetchingUsers, userFetchFailure, userFetchSuccess , fetchUsers}