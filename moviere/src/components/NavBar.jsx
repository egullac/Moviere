import React, { Fragment, useState} from 'react'
import {HiSearch} from 'react-icons/hi'
import {GoTriangleDown} from 'react-icons/go'
import { Route, Routes, NavLink } from 'react-router-dom'
import Movies from './movies/Movies'
import TVShows from './tv/TVShows'
import Trending from './movies/Trends'
import WatchList from './movies/WatchList'
import '../Styles/NavBarStyle.css'
import Form from '../pages/Form'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Communication from '../pages/Communication'
import Settings from '../pages/Settings'
import Detail from './movies/Detail'
import TVDetail from './tv/TVDetail'
import {useMovies} from "./movies/MoviesContext";
import TvWatchList from './tv/TvWatchList'
import { useTv } from './tv/TvContext'

export const Container = React.createContext()

function NavBar(){
  const [toggle, setToggle] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const {items} = useMovies();
  const {itms} = useTv();
return (
  <Container.Provider value={{toggle, inputValue}}>
    <Fragment>
      <nav className={toggle ? '' : 'navBarColor'} >
        <div className='nav-options' >
          <h1 id={toggle ? '' : 'heading'}>MOVİéRE</h1>
          <NavLink to=""  style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Filmler</span>
          </NavLink>
          <NavLink to="/TVShows" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Diziler</span>
          </NavLink>
          <NavLink to="/Trending" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Popüler</span>
          </NavLink>
          {items.length >= 0 && (
          <NavLink to="/WatchList" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Favorileri Filmlerim({items.length})</span>
          </NavLink>
          )}
          {itms.length >= 0 && (
          <NavLink to="/TvWatchList" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Favorileri Dizilerim({itms.length})</span>
          </NavLink>
          )}
        </div>
        <div className="input-group">
        <input type="text" placeholder='Arama yapın...' onChange={(e) => setInputValue(e.target.value)}></input>
        <HiSearch fontSize={21} color="black" id='search'></HiSearch>
        <div id="Color-switcher" onClick={() => setToggle(!toggle)}> 
          <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
        </div>
        <div id='login'><Form><GoTriangleDown color="white" fontSize={50}></GoTriangleDown></Form></div>
        </div>
      </nav>
      <Routes>
        <Route path='' element={<Movies/>}></Route>
        <Route path='TVShows' element={<TVShows/>}></Route>
        <Route path='Trending' element={<Trending/>}></Route>
        <Route path='WatchList' element={<WatchList/>}></Route>
        <Route path='TvWatchList' element={<TvWatchList/>}></Route>
        <Route path='Detail/:movie_detail' element={<Detail/>}></Route>
        <Route path='TVDetail/:movie_detail' element={<TVDetail/>}></Route>
        <Route path='SignIn' element={<SignIn/>}></Route>
        <Route path='SignUp' element={<SignUp/>}></Route>
        <Route path='Communication' element={<Communication/>}></Route>
        <Route path='Settings' element={<Settings/>}></Route>
      </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default NavBar