import { ADD_COMMENT, ADD_DISHES, DISHES_LOADING, DISHES_FAILED, ADD_COMMENTS, PROMOS_LOADING, ADD_PROMOS } from "./actionTypes";
import { baseUrl } from "../shared/baseUrl";
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

    fetch(baseUrl + 'dishes')
        .then(res => res.json())
        .then(dishes => dispatch(addDishes(dishes)))
}

export const fetchComments = () => (dispatch) => {
    fetch(baseUrl + 'comments')
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)))
}

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading());
    fetch(baseUrl + 'promotions')
        .then(res => res.json())
        .then(promos => dispatch(addPromos(promos)))
}

const promosLoading = () => ({
    type: PROMOS_LOADING
})

const addPromos = (promos) => ({
    type: ADD_PROMOS,
    payload: promos
})

const addComments = (comments) => (
    {
        type: ADD_COMMENTS,
        payload: comments
    }
)


const dishesLoading = () => ({
    type: DISHES_LOADING
})

const addDishes = (dishes) => ({
    type: ADD_DISHES,
    payload: dishes
})

const dishesFailed = (errorMessage) => ({
    type: DISHES_FAILED,
    payload: errorMessage
})

