import React, { Fragment, useContext , useEffect, useState } from 'react'
import { Container } from '../NavBar'
import axios from 'axios'
import {AiOutlineClose, AiFillPlayCircle, AiFillPlusCircle } from 'react-icons/ai'
import NoImg from '../NoImage.jpg'
import '../../Styles/Videos.css'
import TrailerTrending from '../../Trailers/TrailerTrending'
import {NavLink } from 'react-router-dom';
import { useMovies } from './MoviesContext'

function Trends(){
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const Api = 'https://api.themoviedb.org/3'
  const TrendsShown = '/trending/all/week'
  const [trendArray, setTrendArray] = useState([])
  const [trendTitle, setTrendTitle] = useState('')
  const [trailer, setTrailer] = useState(true)
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const {addToMovies} = useMovies();

const Trends = async() => {
  const data = await axios.get(`${Api}${TrendsShown}` , {
    params: {
      api_key: '1351605618fb94ec8dfd61d3c96f9f04',
      query: input
    }
  })
  const results = data.data.results
  setTrendArray(results)
}

useEffect(() => {
  setTimeout (() => {
    Trends()
  }, 100)
},[input])

const TrendTitle = (trend) => {
  setTrendTitle(trend.title)
  setTrailer(!trailer)
}

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
        <div className="movies-container">
          {trendArray.map((trend) => {
            return(
              <Fragment key={trend.id}>
              <div id={trailer ? 'container' : 'NoContainer'}>
                 <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => TrendTitle(trend)}></AiFillPlayCircle>
                 <AiFillPlusCircle color='#fff' fontSize={40} id={trailer ? "playIcon1" : 'hide'} onClick={() => addToMovies(trend)}></AiFillPlusCircle>
                 <NavLink to={`/Detail/${trend.id}`}>
                 <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImg} alt=''></img>
                  </NavLink>
                  <h3 id='smaller-Text' className={toggle ? 'mainColor' : 'secondaryColor'} >{trend.title}</h3>
              </div>
              </Fragment>
            )
          })}
            {trailer ? console.log : <TrailerTrending TrendTitle={trendTitle} toggle={toggle}></TrailerTrending>}
            <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} cursor={'pointer'} onClick={() => setTrailer(true)}></AiOutlineClose>
        </div>
      </div>
    </Fragment>
  )
}
export default Trends