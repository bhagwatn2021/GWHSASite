import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';
import {Link} from 'react-router-dom';
import _ from "lodash";

 class BlogPost extends Component {
   componentDidMount(){
     const {id} = this.props.match.params;
     this.props.fetchPost(id);
   }

   onDelete(){
     const {id} = this.props.match.params;
     this.props.deletePost(id, () => {
       this.props.history.push("/blog");
     } );
   }
  render() {
    const {post} = this.props;

    if(!post){
      return(
        <div>
        Loading...
        </div>
      );
    }
    return (
      <div>
      <Link to="/blog" className="btn">
        Back to blog
      </Link>
      <button className= "btn pull-xs-right" onClick={this.onDelete.bind(this)}>
      Remove post
      </button>
      <h4>
      {post.title}
      </h4>
      <h4>
      {post.categories}
      </h4>
      <h4>
      {post.content}
      </h4>
      </div>
    );
  }
}
function mapStateToProps({posts}, props){
  return {post: posts[props.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost})(BlogPost);
