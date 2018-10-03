import React, {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createBlogPost} from '../actions';
import { Link } from "react-router-dom";

class NewBlogPost extends Component{
  renderField(field) {
   const { meta: { touched, error } } = field;
   const className = `form-group ${touched && error ? "has-danger" : ""}`;

   return (
     <div className={className}>
       <label>{field.label}</label>
       <input className="form-control" type="text" {...field.input} />
       <div className="text-help">
         {touched ? error : ""}
       </div>
     </div>
   );
 }

  onSubmit(values){

    this.props.createBlogPost(values, () => {
      this.props.history.push("/blog");
    } );
  }
  render(){
  const {handleSubmit}= this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Name and GW Email"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Question"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Your Question or Idea"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/blog" className="btn ">Exit</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter your name.";
  }
  if (!values.categories) {
    errors.categories = "Enter your GW email.";
  }
  if (!values.content) {
    errors.content = "Enter your question or idea.";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "NewBlogPost"
})(connect(null, { createBlogPost })(NewBlogPost));
