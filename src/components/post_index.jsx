import React, { Component } from 'react';
// import PostRecuder from '../reducers/reducer_posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from './../actions/';
import _ from 'lodash';
import { throws } from 'assert';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return <li className="list-group-item" key={post.id}>
                <Link to={`/posts/${post.id}`} >
                    {post.title}
                </Link>
            </li>;
        });
    }
    render() {

        return (
            <div className="row">
                <div className="col-xs-6">
                    <h3>Posts</h3>
                </div>
                <div className="col-xs-6">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <div className="col-xs-12">
                    <ul>
                        {this.renderPosts()}
                    </ul>
                </div>

            </div>
        );
    }
}

function mapStatetoProps(state) {
    return { posts: state.posts };
}

export default connect(mapStatetoProps, { fetchPosts })(PostsIndex);