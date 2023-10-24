
import ActionTypes from "./actionTypes";

const initialState = {
    loading: true,
    data: [],
    error: ''
}


const reducer = (state = initialState, action) => {
    const { type, payload = {} } = action ?? {};
    switch (type) {
        case ActionTypes.START_FETCHING_USERS: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case ActionTypes.FETCHING_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: payload?.users ?? []
            }
        }
        case ActionTypes.FETCHING_USERS_FAILURE: {
            return {
                ...state,
                loading: false,
                data: [],
                error: payload?.errorMsg ?? ""
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;