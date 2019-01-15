//Core
import { apply, put, call } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../API';

//Action
import { fillPosts } from '../../actions';
import { startSpinner, stopSpinner } from '../../../ui/actions';

export function * fetchPostsWorker ({payload}) {
    yield put(startSpinner());

    const posts = yield apply(api, api.posts.get, [ payload ]);
    yield put(fillPosts(posts));

    yield put(stopSpinner());
}
