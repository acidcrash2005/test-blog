//Core
import { apply, put, select } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../API';

//Action
import { removePost } from '../../actions';
import { startSpinner, stopSpinner } from '../../../ui/actions';


export function * removePostWorker ({ payload: postId }) {
    try {
        yield put(startSpinner());

        yield apply(api, api.posts.removePost, [ postId ]);

        yield put(removePost(postId));
    } catch (error) {
        console.log('removePostWorker', error);
    } finally {
        yield put(stopSpinner());
    }
}
