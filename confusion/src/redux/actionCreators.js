import { ADD_COMMENT } from "./actionTypes";
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