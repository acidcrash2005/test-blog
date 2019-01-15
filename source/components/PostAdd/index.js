import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { Formik, Form, Field } from 'formik';

//Components
import {Notification} from '../';

//Actions
import { createPostAsync, clearPost } from '../../bus/posts/actions';

//Shapes
import { postSape } from '../../bus/forms/shapes';


//MapState
const mapState = (state)=> {
    return {
        post: state.post,
    };
};

//MapDispatch
const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            createPostAsync,
            clearPost,
        }, dispatch),
    };
};


export default
@withRouter
@connect(mapState, mapDispatch)
class PostAdd extends Component {
    componentWillUnmount() {
        const {actions} = this.props;
        actions.clearPost();
    }

    _submitLoginForm = (data) => {
        const {actions} = this.props;
        actions.createPostAsync(data);
    }


    render () {
        const {post} = this.props;

        return (
            <div className = 'container'>
                <Notification/>

                {
                    !post.get('id') ? <Formik
                        initialValues = { postSape.shape }
                        render = { (props) => {
                            const { isValid, touched, errors } = props;

                            return (
                                <Form>
                                    <div className = 'form-group'>
                                        <Field
                                            className = 'form-control'
                                            name = 'title'
                                            placeholder = 'title'
                                            type = 'text'
                                        />
                                        {
                                            !isValid && touched.title && <p className = 'alert-danger'>{errors.title}</p>
                                        }
                                    </div>
                                    <div className = 'form-group'>
                                        <Field
                                            className = 'form-control'
                                            name = 'userId'
                                            placeholder = 'userId'
                                            type = 'text'
                                        />
                                        {
                                            !isValid && touched.userId && <p className = 'alert-danger'>{errors.userId}</p>
                                        }
                                    </div>

                                    <div className = 'form-group'>
                                        <Field
                                            className = 'form-control'
                                            component = 'textarea'
                                            name = 'body'
                                            placeholder = 'body'
                                        />
                                        {
                                            !isValid && touched.body && <p className = 'alert-danger'>{errors.body}</p>
                                        }
                                    </div>


                                    <button
                                        className = 'btn btn-info'
                                        type = 'submit'>
                                        Submit
                                    </button>
                                </Form>
                            );
                        } }
                        validationSchema = { postSape.schema }
                        onSubmit = { this._submitLoginForm }
                    />
                        : <div className = 'container'>
                            <small>#: {post.get('id')}</small>
                            <br/>
                            <small>UserId: {post.get('userId')}</small>
                            <h1>{post.get('title')}</h1>
                            <p>{post.get('body')}</p>
                            <Link to = '/'>Home</Link>
                        </div>
                }
            </div>
        );
    }
}
