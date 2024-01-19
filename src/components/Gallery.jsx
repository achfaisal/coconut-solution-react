import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Gallery = () => {
  return (
    <div className="container-video">
      <video
        className="video"
        autoPlay
        loop
        muted
        src="videos/coconut-video.mp4"
      ></video>
    </div>
  );
};

export default Gallery;
