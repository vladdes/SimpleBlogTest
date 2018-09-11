import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostShow extends Component{
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
    }
    render(){
        const post = this.props.post;
        console.log(post);
        return (
            <div>
                <h1>{post.title}</h1>
                <h4>{post.categories}</h4>
                <p>{post.content}</p>
                <Link to ="/" className="btn btn-primary">Back to List</Link>
            </div>
        );
    }
}


function mapStatetoProps(state) {
    return { post: state.posts };
}

export default connect(mapStatetoProps, { fetchPost })(PostShow);