//Core
import { List, fromJS, Map } from 'immutable';

// Types
import {types} from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload); //List(Map,Map,Map);

        case types.REMOVE_POST:
            return state.filter((post) => action.payload !== post.get('id'));

        default:
            return state;
    }
};

export const postReducer = (state = Map(), action) => {
    switch (action.type) {
        case types.CREATE_POST:
            return fromJS(action.payload);

        case types.CLEAR_POST:
            return Map();

        default:
            return state;
    }
};
