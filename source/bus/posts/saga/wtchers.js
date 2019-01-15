//Core
import { takeEvery } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { fetchPostsWorker } from './workers/fetchPostsWorker';
import { createPostWorker } from './workers/createPostWorker';
import { removePostWorker } from './workers/removePostWorker';

export function* watchPosts() {
    yield takeEvery(types.FETCH_POST_ASYNC, fetchPostsWorker);
    yield takeEvery(types.CREATE_POST_ASYNC, createPostWorker);
    yield takeEvery(types.REMOVE_POST_ASYNC, removePostWorker);
}
