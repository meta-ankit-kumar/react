import { COMMENTS } from "../shared/comments";
import { ADD_COMMENT } from "./actionTypes";

const CommentReducer = (state = COMMENTS, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}
export default CommentReducer;