import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router-dom';
class PostShow extends Component{
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
    }
    render(){
        const { post } = this.props;

        if(!post){
            return (<div>loading...</div>)
        }

        return (
            <div>
                <h1>Title: {post.title}</h1>
                <h6>Categories: {post.categories}</h6>
                <p>Content: {post.content}</p>
                <Link to ="/" className="btn btn-warning">Cancel</Link>
            </div>
        );
    }
}


function mapStatetoProps( {posts}, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStatetoProps, { fetchPost })(PostShow);