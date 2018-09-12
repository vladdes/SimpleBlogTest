import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';
class PostShow extends Component{
    componentDidMount(){
        if(!this.props.post){
            this.props.fetchPost(this.props.match.params.id);
        }
        
    }

    onDeleteClick(){
        this.props.deletePost(this.props.match.params.id, () => {
            this.props.history.push('/');
        });
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
                <button 
                className="btn btn-danger pull-xs-right" 
                onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
            </div>
        );
    }
}


function mapStatetoProps( {posts}, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStatetoProps, { fetchPost, deletePost })(PostShow);