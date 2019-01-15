//Core
import { apply, put, select } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../API';

//Action
import { createPost } from '../../actions';
import { startSpinner, stopSpinner, fillNotification } from '../../../ui/actions';


export function * createPostWorker ({ payload }) {
    try {
        yield put(startSpinner());

        const post = yield apply(api, api.posts.createPost, [ payload ]);

        yield put(createPost(post));
        yield put(fillNotification({ type: 'info', text: 'Create post done!' }));
    } catch (error) {
        console.log('createPostWorker', error);
    } finally {
        yield put(stopSpinner());
    }
}
