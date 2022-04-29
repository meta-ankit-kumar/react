import { ADD_COMMENT, ADD_COMMENTS, COMMENTS_FAILED } from "./actionTypes";

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
        case COMMENTS_FAILED:
            return {
                ...state,
                errorMessage: action.payload,
                comments: []
            }
        default:
            return state;
    }
}
export default CommentReducer;