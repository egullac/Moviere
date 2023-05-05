import React,{useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import NoPcr from '../NoPicture.jpg';
import axios from "axios";
import { useParams } from 'react-router-dom';
const handleDragStart = (e) => e.preventDefault();

const Gallery = () => {
  const [credits, setCredits] = useState([]);
  const Images = 'https://image.tmdb.org/t/p/w300/'
  const {movie_detail} = useParams();

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${Images}/${c.profile_path}` : NoPcr}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt" style={{color: "#5d5a1f"}}>{c?.name}</b>
    </div>
  ));
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_detail}/credits?api_key=1351605618fb94ec8dfd61d3c96f9f04`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);
  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Gallery;
