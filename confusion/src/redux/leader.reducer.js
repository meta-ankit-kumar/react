import { LEADERS } from '../shared/leaders';
import { ADD_LEADERS, LEADERS_FAILED, LEADERS_LOADING } from './actionTypes';

const LeaderReducer = (state = {
    isLoading: true,
    errorMessage: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ADD_LEADERS:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                leaders: action.payload
            }
        case LEADERS_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
                leaders: []
            }
        case LEADERS_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
                leaders: []
            }
        default:
            return state;
    }
}

export default LeaderReducer;