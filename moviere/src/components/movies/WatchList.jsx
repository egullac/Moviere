import React,{Fragment, useContext,useState} from 'react'
import {AiFillPlayCircle,AiFillMinusCircle, AiOutlineClose } from 'react-icons/ai'
import { Container } from '../NavBar'
import TrailerMovies from '../../Trailers/TrailerMovies'
import {useMovies} from "./MoviesContext";
import NoImg from '../NoImage.jpg'
import "../../Styles/Videos.css"
import {NavLink } from 'react-router-dom';

function WatchList(){
  const {toggle } = useContext(Container)
  const {items,removeFromMovies} = useMovies();
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle]= useState('')
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const MoviesTitle = (item) => {
    setTitle(item.title)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
    <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container">
       {items.length < 1 && (
        <h1 className={toggle ? 'mainColor' : 'secondaryColor'}>Favorilerim boş...</h1>
       )}
       {items.length > 0 &&(
        <Fragment key={items.id}>
          {items.map((item)=>(
              <Fragment key = {item.id} >
                <div id={trailer ? 'container' : 'NoContainer'}> 
                  <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => MoviesTitle(item)}></AiFillPlayCircle>
                  <AiFillMinusCircle color='#fff' fontSize={40} id={trailer ? "playIcon1" : 'hide'} onClick={() => removeFromMovies(item._id)}></AiFillMinusCircle>
                  <NavLink to={`/Detail/${item.id}`}>
                  <img src={item.poster_path ? `${Images}${item.poster_path}` : NoImg} alt=''></img>
                  </NavLink>
                  <h3 id={item.title.length > 28 ? 'smaller-Text' : ""} className={toggle ? 'mainColor' : 'secondaryColor'} >{item.title}</h3>
                </div>
              </Fragment>
          ))}
      </Fragment>
       )}
      {trailer ? console.log : <TrailerMovies moviesTitle={title} toggle={toggle}></TrailerMovies>}
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} cursor={'pointer'} onClick={() => setTrailer(true)}></AiOutlineClose>
     </div>
     </div>
    </Fragment>
    
  )
}

export default WatchList