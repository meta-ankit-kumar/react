import { ADD_COMMENT, ADD_DISHES, DISHES_LOADING, DISHES_FAILED } from "./actionTypes";
import DISHES from '../shared/dishes';
export const addComment = (dishId, rating, authorName, comment) => (
        {   
            type: ADD_COMMENT,
            payload: {
                dishId,
                rating,
                author: authorName,
                comment
            }  
        }
)

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 5000)
}

const dishesLoading = () => ({
    type: DISHES_LOADING
})

const addDishes = () => ({
    type: ADD_DISHES,
    payload: DISHES
})

const dishesFailed = (errorMessage) => ({
    type: DISHES_FAILED,
    payload: errorMessage
})

