import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class EBoard extends Component {
  render() {
    return (
      <div>
      <h1>
      Meet our E-Board!
      </h1>
     <div>
      <Link to="/home" className="btn ">Home</Link>
      <Link to="/about" className="btn ">About Us</Link>
      <Link to="/events" className="btn ">Events</Link>
      <Link to="/blog" className="btn ">Blog</Link>
      </div>
      </div>
    );
  }
}
