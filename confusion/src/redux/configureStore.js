import {createStore, combineReducers} from 'redux';
import CommentReducer from './comment.reducer';
import PromotionReducer from './promotions.reducer';
import DishReducer from './dishes.reducer';
import LeaderReducer from './leader.reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: DishReducer,
            promotions: PromotionReducer,
            leaders: LeaderReducer,
            comments: CommentReducer
        })
    );

    return store;
}