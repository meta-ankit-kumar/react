import { LEADERS } from '../shared/leaders';

const LeaderReducer = (state = LEADERS, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default LeaderReducer;