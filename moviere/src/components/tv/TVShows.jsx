import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle } from 'react-icons/ai'
import {AiOutlineClose, AiFillPlusCircle} from 'react-icons/ai'
import { Container } from '../NavBar'
import '../../Styles/Videos.css'
import NoImg from '../NoImage.jpg'
import axios from 'axios'
import TrailerTVShows from '../../Trailers/TrailerTVShows'
import {NavLink } from 'react-router-dom';
import { useTv } from './TvContext'

function TVShows () {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const [showData, setShowData] = useState([])  
  const {addToTv} = useTv();
  const [trailer, setTrailer] = useState(true)
  const Shown = input ? 'search' : 'discover'
  const [title, setTitle] = useState('')
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const TVShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '1351605618fb94ec8dfd61d3c96f9f04',
        query: input
      }
    })
    const results = data.data.results
    setShowData(results)
  }
  useEffect(() => {
    setTimeout (() => {
      TVShows()
    }, 100)
  },[input])
  
  const TvShowTitle = (shows) => {
    setTitle(shows.name)
    setTrailer(!trailer)
  }

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container">
      {showData.map((shows) => {
        return(
          <Fragment key={shows.id}>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => TvShowTitle(shows)}></AiFillPlayCircle>             
              <AiFillPlusCircle color='#fff' fontSize={40} id={trailer ? "playIcon1" : 'hide'} onClick={() => addToTv(shows)}></AiFillPlusCircle>
              <NavLink to={`/TVDetail/${shows.id}`}>
              <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt="" ></img>
              </NavLink>
              <h3 id={shows.name.length > 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>{shows.name}</h3>
            </div>
          </Fragment>
        )
      })}
      {trailer ? console.log : <TrailerTVShows TVShowsTitle={title} toggle={toggle}></TrailerTVShows>}
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} cursor={'pointer'} onClick={() => setTrailer(true)}></AiOutlineClose>
      </div>
      </div>
    </Fragment>
  )
}
export default TVShows