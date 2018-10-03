import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Events extends Component {
  render() {
    return (
      <div>
      <h1>
      Events
      </h1>
     <div>
      <Link to="/home" className="btn ">Home</Link>
      <Link to="/about" className="btn ">About Us</Link>
      <Link to="/eboard" className="btn ">E-board</Link>
      <Link to="/blog" className="btn ">Blog</Link>
      </div>
      </div>
    );
  }
}
