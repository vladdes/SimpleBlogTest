import React, { Component } from 'react';
// import PostRecuder from '../reducers/reducer_posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from './../actions/';
import _ from 'lodash';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return <li className="list-group-item" key={post.id}>
                {post.title}
            </li>;
        });
    }
    render() {

        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return { posts: state.posts };
}

export default connect(mapStatetoProps, { fetchPosts })(PostsIndex);