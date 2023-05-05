import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerMovie.css'

function TrailerTVShows({TVShowsTitle, toggle}) {
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] = useState("");

    function handleSearch() {
        setVideo(TVShowsTitle)
        movieTrailer(video).then((res) => {
        setVideoURL(res);
        });
    }
    useEffect(() => {
        handleSearch()
    }, [videoURL])
  return (
    <Fragment>
      <div className='Container'>
      </div>
      <div className='player'>
      <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{TVShowsTitle}</h1>
      <ReactPlayer url={videoURL} controls={true} width={'1280px'} height={"720px"} muted={false}></ReactPlayer>
      </div>
    </Fragment>
  )
}
export default TrailerTVShows
