import React,{Fragment, useContext,useState} from 'react'
import {AiFillPlayCircle,AiFillMinusCircle, AiOutlineClose } from 'react-icons/ai'
import { Container } from '../NavBar'
import TrailerTVShows from '../../Trailers/TrailerTVShows';
import { useTv } from './TvContext';
import NoImg from '../NoImage.jpg'
import '../../Styles/Videos.css'
import {NavLink } from 'react-router-dom';

function TvWatchList(){
  const {toggle } = useContext(Container)
  const {itms,removeFromTv} = useTv();
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle]= useState('')
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const TvShowTitle = (shows) => {
    setTitle(shows.name)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
    <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container">
       {itms.length < 1 && (
        <h1 className={toggle ? 'mainColor' : 'secondaryColor'}>Favorilerim boş...</h1>
       )}
       {itms.length > 0 &&(
        <Fragment >
          {itms.map((shows)=>(
              <Fragment key = {shows.id} >
                <div id={trailer ? 'container' : 'NoContainer'}> 
                  <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => TvShowTitle(shows)}></AiFillPlayCircle>
                  <AiFillMinusCircle color='#fff' fontSize={40} id={trailer ? "playIcon1" : 'hide'} onClick={() => removeFromTv(shows._id)}></AiFillMinusCircle>
                  <NavLink to={`/TvDetail/${shows.id}`}>
                  <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt=''></img>
                  </NavLink>
                  <h3 id={shows.name.length > 28 ? 'smaller-Text' : ""} className={toggle ? 'mainColor' : 'secondaryColor'} >{shows.name}</h3>
                </div>
              </Fragment>
          ))}
      </Fragment>
       )}
     {trailer ? console.log : <TrailerTVShows TVShowsTitle={title} toggle={toggle}></TrailerTVShows>}
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} cursor={'pointer'} onClick={() => setTrailer(true)}></AiOutlineClose>
      </div>
     </div>
    </Fragment>
    
  )
}

export default TvWatchList