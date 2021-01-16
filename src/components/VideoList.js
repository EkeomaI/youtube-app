import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />
    );
  });
  //console.log(videos);
  return <div className="ui relaxed divided list video-list">{renderedList}</div>;
};

export default VideoList;
