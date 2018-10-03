import React from "react";
import Image from 'react-native';

const Slide = (props) => {
  const imageSrc = props.src;
  const imageText = props.text;

  return (
      <div className="video-list media">
        <div className="media">
          <img className="media-object" src={imageSrc} />
        </div>
        <div className="media-body">
          <div className="media-heading">{imageText}</div>
        </div>
      </div>
  );
};

export default Slide;
