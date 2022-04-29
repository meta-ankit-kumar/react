import { ADD_COMMENT, ADD_DISHES, DISHES_LOADING, DISHES_FAILED, ADD_COMMENTS, PROMOS_LOADING, ADD_PROMOS, PROMOS_FAILED, COMMENTS_FAILED } from "./actionTypes";
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
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                const error = new Error("Error " + response.status + ": " + response.statusText);
                throw error;
            }
        }, (error) => {
            throw new Error(error.message);
        })
        .then(res => res.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const fetchComments = () => (dispatch) => {
    fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                const error = new Error("Error " + response.status + ": " + response.statusText);
                throw error;
            }
        }, (error) => {
            throw new Error(error.message);
        })
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading());
    fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                const error = new Error("Error " + response.status + ": " + response.statusText);
                throw error;
            }
        }, (error) => {
            throw new Error(error.message);
        })
        .then(res => res.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
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

const promosFailed = (errorMessage) => ({
    type: PROMOS_FAILED,
    payload: errorMessage
})

const commentsFailed = (errorMessage) => ({
    type: COMMENTS_FAILED,
    payload: errorMessage
})