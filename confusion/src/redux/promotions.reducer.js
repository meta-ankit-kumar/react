import { ADD_PROMOS } from "./actionTypes";
const PromotionReducer = (state = {
    errorMessage: null,
    isLoading: true,
    promotions: []
}, action) => {
    switch (action.type) {
        case ADD_PROMOS:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                promotions: action.payload
            }
        default:
            return state;
    }
}
export default PromotionReducer;