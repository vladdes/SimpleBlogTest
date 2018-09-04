import React, { Component } from 'react';
// import PostRecuder from '../reducers/reducer_posts';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions/';

class PostsIndex extends Component
{
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){

        console.log(this.props.posts);
        return (
            <div>
                Posts Index
               
            </div>
        );
    }
}

function mapStatetoProps(state){
    return { posts: state.posts};
}

export default connect(mapStatetoProps, { fetchPosts })(PostsIndex);