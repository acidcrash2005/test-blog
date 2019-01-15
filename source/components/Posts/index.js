//Core
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, withRouter } from 'react-router-dom';

//Components
import {Pagination} from '../';


//Actions
import { fetchPostsAsync, removePostAsync } from '../../bus/posts/actions';

//MapState
const mapState = (state) => {
    return {
        posts: state.posts,
    };
};

//MapDispatch
const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchPostsAsync,
            removePostAsync,
        }, dispatch),
    };
};

export default
@withRouter
@connect(mapState, mapDispatch)
class Posts extends Component {
    state = {
        sort:  'id',
        order: 'asc',
    }

    componentDidMount() {
        this._getPostList();
    }


    componentDidUpdate(prevProps, prevSate) {
        const {match} = this.props;
        if (prevProps.match.url !== match.url || prevSate !== this.state) {
            this._getPostList();
        }
    }

    _getPostList = () => {
        const {actions, match: {params}} = this.props;
        const {sort, order} = this.state;

        window.scrollTo(0, 0);

        if (params.page) {
            return actions.fetchPostsAsync({page: params.page, sort, order});
        }

        return actions.fetchPostsAsync({page: 1, sort, order});
    }


    _deletePost = (id) => {
        const {actions} = this.props;

        actions.removePostAsync(id);
    }

    _sort = (event) => {
        this.setState({
            sort: event.target.value,
        });
    }

    _order = (event) => {
        this.setState({
            order: event.target.value,
        });
    }

    render() {
        const {posts} = this.props;

        return (
            <div className = 'container'>
                <h2>Sort & Order</h2>
                <div className = 'row'>
                    <div className = 'col-sm'>
                        <div className = 'form-group'>
                            <select
                                className = 'form-control'
                                onChange = { this._sort }>
                                <option value = 'id'>id</option>
                                <option value = 'title'>Title</option>
                                <option value = 'userId'>userId</option>
                            </select>
                        </div>
                    </div>
                    <div className = 'col-sm'>
                        <div className = 'form-group'>
                            <select
                                className = 'form-control'
                                onChange = { this._order }>
                                <option value = 'asc'>asc</option>
                                <option value = 'desc'>desc</option>
                            </select>
                        </div>
                    </div>
                </div>

                {
                    posts.map(
                        (post, index) => {
                            return (
                                <div
                                    className = 'card'
                                    key = { `post-item-${index}` }>
                                    <div className = 'card-body'>
                                        <small>#{post.get('id')} UserId: {post.get('userId')}</small>
                                        <h5 className = 'card-title'>
                                            {post.get('title')}
                                        </h5>
                                        <p className = 'card-text'>
                                            {post.get('body')}
                                        </p>
                                        <Link to = { `/post/${post.get('id')}` }>
                                            ReadMore
                                        </Link>
                                        <button
                                            className = 'btn btn-danger float-right'
                                            onClick = { () => { this._deletePost(post.get('id')); } }>
                                            DELETE
                                        </button>
                                    </div>
                                </div>
                            );
                        },
                    )
                }
                <Pagination/>
            </div>
        );
    }
}

