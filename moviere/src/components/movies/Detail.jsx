import React,{useEffect, useState, useContext, Fragment} from 'react'
import axios from 'axios'
import { Container } from '../NavBar'
import { Button } from "@material-ui/core";
import {AiFillYoutube} from 'react-icons/ai'
import Carousel from './Carousel'
import NoImg from '../NoImage.jpg'
import "../../Styles/Videos.css";
import "../../Styles/Detail.css";
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [currentMovieDetail, setMovie] = useState()
  const {toggle} = useContext(Container)
  const {movie_detail} = useParams();
  const [video, setVideo] = useState();
  const Images = 'https://image.tmdb.org/t/p/w500/'
  
  useEffect(() => {
    getData()
    fetchVideo()
    window.scrollTo(0,0)
  }, [])

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_detail}?api_key=1351605618fb94ec8dfd61d3c96f9f04&language=tr-TR`)
    .then(res => res.json())
    .then(data => setMovie(data))
}

const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_detail}/videos?api_key=1351605618fb94ec8dfd61d3c96f9f04`

    );

    setVideo(data.results[0]?.key);
  };


  return (
    <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
    <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={currentMovieDetail ? `${Images}${currentMovieDetail.backdrop_path}` : NoImg} alt='' />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={currentMovieDetail ? `${Images}${currentMovieDetail.poster_path}` : NoImg} alt='' />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">

                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") oylar" : ""}</span>

                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + "  dakika" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Yayın Tarihi: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <Fragment key={genre.id}><span className="movie__genre" id={genre.id}>{genre.name}</span></Fragment>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Özet</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                        <div className='btn'>
                            <Button 
                                variant="contained"
                                color="secondary"
                                startIcon={<AiFillYoutube/>}
                                target="__blank"
                                href={`https://www.youtube.com/watch?v=${video}`
                            }>
                            FRAGMANI İZLE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="txt" style={{color: "#5d5a1f"}}>Başrol Oyuncuları</h1>
            <Carousel />  
        </div>
    </div>
  )
}

export default Detail