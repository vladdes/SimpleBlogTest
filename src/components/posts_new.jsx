import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{
    renderTextField(field){
        const { meta : {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : '' }`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                className="form-control"
                {...field.input}
                type="text"
                />
                <span style={{color: 'orange'}}>{touched ? error : ''}</span>
            </div>
        );
    }
    renderTextAreaField(field){
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : '' }`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <textarea
                className="form-control"
                {...field.input}
                type="textarea"
                rows="10"
                />
                <span style={{color: 'orange'}}>{touched ? error : ''}</span>
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    component={this.renderTextField}
                    label="Title"
                    type="text"
                />
                 <Field
                    name="categories"
                    component={this.renderTextField}
                    label="Categories"
                    type="text"
                />
                <Field
                    name="content"
                    component={this.renderTextAreaField}
                    label="Posts Content"   
                    type="textarea"                 
                />
                <button type="submit" className="btn btn-primary">Submit</button> 
                <Link to ="/" className="btn btn-warning">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title that is at least 3 characters!";
    }
    
    if(!values.content){
        errors.content = "Enter some content!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);