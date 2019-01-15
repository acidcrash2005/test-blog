// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//Reducers
import { uiReducer as ui } from '../bus/ui/reducer';
import { postsReducer as posts, postReducer as post } from '../bus/posts/reducer';

export default (history) => combineReducers({
    ui,
    posts,
    post,
    router: connectRouter(history),
});
