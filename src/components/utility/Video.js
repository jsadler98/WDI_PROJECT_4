import React from 'react';

const Video = ({ videoId }) => {
  return (
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen></iframe>
  );
};

export default Video;
