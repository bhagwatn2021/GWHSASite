import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
      <h1>
      About Us
      </h1>
     <div>
      <Link to="/home" className="btn ">Home</Link>
      <Link to="/eboard" className="btn ">E-Board</Link>
      <Link to="/events" className="btn ">Events</Link>
      <Link to="/blog" className="btn ">Blog</Link>
      </div>
      </div>
    );
  }
}
