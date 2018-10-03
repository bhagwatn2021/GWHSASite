import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom';
import _ from "lodash";

 class Blog extends Component {
   componentDidMount(){
     this.props.fetchPosts();
   }

  renderPosts(){

    return _.map(this.props.posts, post => {
      console.log(post);
      return(
      <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>
          {post.categories}
        </Link>
        </li>
      );
    });
  }
  render() {

    return (
      <div>
      <div>
      <h1>
      Meet our E-Board!
      </h1>
     <div>
      <Link to="/home" className="btn ">Home</Link>
      <Link to="/about" className="btn ">About Us</Link>
      <Link to="/eboard" className="btn ">Eboard</Link>
      <Link to="/events" className="btn ">Events</Link>
      </div>
      </div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/post">
            Post to blog
          </Link>
        </div>
        <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

export default connect(mapStateToProps,{fetchPosts})(Blog);
