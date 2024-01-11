import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Gallery = () => {
  return (
    <div className="container-video">
      <div>
        <video
          className="video"
          autoPlay
          loop
          muted
          src="videos/coconut-video.mp4"
        ></video>
      </div>
      <div className="text-container">
        <h1>Your Text Goes Here</h1>
        <p>Additional text or content goes here</p>
      </div>
    </div>
  );
};

export default Gallery;
