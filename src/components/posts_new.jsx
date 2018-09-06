import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    renderTextField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                className="form-control"
                {...field.input}
                type="text"
                />
            </div>
        );
    }
    renderTextAreaField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <textarea
                className="form-control"
                {...field.input}
                type="textarea"
                rows="10"
                />
            </div>
        );
    }


    render(){
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderTextField}
                    label="Title"
                />
                 <Field
                    name="categories"
                    component={this.renderTextField}
                    label="Categories"
                />
                <Field
                    name="content"
                    component={this.renderTextAreaField}
                    label="Posts Content"                    
                />
                
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
})(PostsNew);