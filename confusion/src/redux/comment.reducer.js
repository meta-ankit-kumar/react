import { ADD_COMMENT, ADD_COMMENTS } from "./actionTypes";

const CommentReducer = (state = {
    errorMessage: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        case ADD_COMMENTS:
            return {
                ...state,
                errorMessage: null,
                comments: action.payload
            }
        default:
            return state;
    }
}
export default CommentReducer;