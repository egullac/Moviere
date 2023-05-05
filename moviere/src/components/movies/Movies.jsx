import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle, AiOutlineClose, AiFillPlusCircle} from 'react-icons/ai'
import { Container } from '../NavBar'
import '../../Styles/Videos.css'
import NoImg from '../NoImage.jpg'
import TrailerMovies from '../../Trailers/TrailerMovies'
import {NavLink } from 'react-router-dom';
import { useMovies } from './MoviesContext'

function Movies () {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const[moviesData, setMoviesData]= useState([])
  const {addToMovies} = useMovies();
  const [trailer, setTrailer] = useState(true)
  const [movieTitle, setMovieTitle]= useState('')
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const MovieCall = async () => {
    const data = await axios.get(Api,{
      params: {
        api_key: '1351605618fb94ec8dfd61d3c96f9f04',
        query: input
      }
    })
    const results = data.data.results
    setMoviesData(results)
  }
  useEffect(() => {
    setTimeout(() => {
      MovieCall()
    }, 100)
  },[input])
  
  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title)
    setTrailer(!trailer)
  } 
  
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
        <div className="movies-container" >
          {moviesData.map((movie) => {
            return(
            <Fragment key = {movie.id} >
              <div id={trailer ? 'container' : 'NoContainer'} >
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => MoviesTitle(movie)}></AiFillPlayCircle>
              <AiFillPlusCircle  color="#fff" fontSize={40} id={trailer ? "playIcon1" : 'hide'} onClick={() => addToMovies(movie)}></AiFillPlusCircle>
              <NavLink to={`/Detail/${movie.id}`}>
                <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt=''></img>
              </NavLink>
              <h3 id={movie.title.length > 28 ? 'smaller-Text' : ""} className={toggle ? 'mainColor' : 'secondaryColor'} >{movie.title}</h3>
            </div>
            </Fragment>
          )
        })}
      {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle} toggle={toggle}></TrailerMovies>}
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} cursor={'pointer'} onClick={() => setTrailer(true)}></AiOutlineClose>
      </div>
      </div>
    </Fragment>
  )
}

export default Movies