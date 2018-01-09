import React from 'react';

const Video = ({ videoId }) => {
  return (
    <iframe width="300" height="215" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen></iframe>
  );
};

export default Video;
