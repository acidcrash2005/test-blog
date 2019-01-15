import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

//Actions
import { fetchPostsAsync } from '../../bus/posts/actions';

//MapState
const mapState = (state)=> {
    return {
        posts: state.posts,
    };
};

//MapDispatch
const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchPostsAsync,
        }, dispatch),
    };
};


export default
@withRouter
@connect(mapState, mapDispatch)
class Post extends Component {
    componentDidMount() {
        const {posts, actions} = this.props;

        if (posts.size === 0) {
            actions.fetchPostsAsync();
        }
    }

    render () {
        const {posts, match:{params}} = this.props;
        const post = posts.filter((post) => Number(params.id) === post.get('id'));

        return (
            <div className = 'container'>
                <small>#{post.getIn([ 0, 'id' ])} UserId: {post.getIn([ 0, 'userId' ])}</small>
                <h1>{post.getIn([ 0, 'title' ])}</h1>
                <p>{post.getIn([ 0, 'body' ])}</p>
                <Link to = '/'>Home</Link>
            </div>
        );
    }
}
