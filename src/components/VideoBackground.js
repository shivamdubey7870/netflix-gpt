import React from "react";

import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ moviesId }) => {
    const trailerVide=useSelector((store)=>store.movies?.trailerVideo)
    useMovieTrailer(moviesId)
  return (
    <div>
     <iframe
  className="w-screen aspect-video"
  src={`https://www.youtube.com/embed/${trailerVide?.key}`}
  title="YouTube video player"
  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
/>

    </div>
  );
};

export default VideoBackground;
