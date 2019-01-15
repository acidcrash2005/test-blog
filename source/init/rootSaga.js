//Core
import {all, call} from 'redux-saga/effects';

//Watcher
import { watchPosts } from '../bus/posts/saga/wtchers';

export function* rootSaga() {
    yield all([  call(watchPosts) ]);
}
