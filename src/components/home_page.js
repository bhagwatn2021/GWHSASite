import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slide from "./slide";
import Image from 'react-native';


export default class HomePage extends Component {
  constructor(props) {
      super(props);

      this.state = {
        slides: [],
        displayIndex: null,
        displaySlide: null
      };

      this.renderSlides.bind(this);
  }
  changeSlides(n){
    this.state.displayIndex += n;

    if(this.state.displayIndex == this.state.slides.length){
      this.state.displayIndex = 0;
    }

    else if(this.state.displayIndex == -1){
      this.state.displayIndex = this.state.slides.length-1;
    }

    this.setState({
      displayIndex: 0,
      displaySlide: this.state.slides[displayIndex]
    });
  }
  renderSlides() {
    this.state.slides.push(
      <Slide onClick={this.changeSlides(1)} src={require("/Users/Neel/GWCyberSite/images/ImageOne.jpg")} text="GW Cyber's slides" />
    );
    this.state.slides.push(
      <Slide onClick={this.changeSlides(1)} src={require("/Users/Neel/GWCyberSite/images/ImageTwo.jpg")} text="GW Cyber's slidess" />
    );

      this.setState({
        slides: slides,
        displayIndex: 0,
        displaySlide: slides[displayIndex]
      });
  }
  render() {

    return (
      <div>
      <h1>
      GW Cyber
      </h1>
     <div>
     <Link to="/about" className="btn ">About Us</Link>
      <Link to="/events" className="btn ">Events</Link>
     <Link to="/eboard" className="btn ">E-board</Link>
     <Link to="/blog" className="btn ">Blog</Link>
      </div>
      <div>
      <Slide src={this.state.displaySlide} key={this.state.displayIndex} />
       </div>
      </div>
    );
  }
}
