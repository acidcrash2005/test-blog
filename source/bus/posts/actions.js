// Types
import { types } from './types';

//Async
export const fetchPostsAsync = (page) => ({
    type:    types.FETCH_POST_ASYNC,
    payload: page,
});

export const createPostAsync = (data) => {
    return {
        type:    types.CREATE_POST_ASYNC,
        payload: data,
    };
};

export const removePostAsync = (postId) => {
    return {
        type:    types.REMOVE_POST_ASYNC,
        payload: postId,
    };
};

//Sync
export const fillPosts = (posts) => {
    return {
        type:    types.FILL_POSTS,
        payload: posts,
    };
};


export const createPost = (post) => {
    return {
        type:    types.CREATE_POST,
        payload: post,
    };
};

export const removePost = (postId) => {
    return {
        type:    types.REMOVE_POST,
        payload: postId,
    };
};

export const clearPost = () => {
    return {
        type: types.CLEAR_POST,
    };
};
