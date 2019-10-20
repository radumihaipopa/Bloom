import React from 'react';
import { Link } from "react-router-dom";

import './MovieCard.scss'

const imageUrl = 'https://image.tmdb.org/t/p/w500';
const TRUNCATE_LENGTH = 100;

const MovieCard = ({ movie }) => (
  <Link to={{pathname:`/asset/${movie.id}`, movieId: movie.id}}>
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(${imageUrl}${movie.backdrop_path})`
      }}
    >
      <div className="movie-card-container">
        <div className="playbtn-container">
            <button className="playBtn ">▶</button>
          </div>
        <div className="movie-card-text">
        
          <div className="movie-card-title">{movie.original_title}</div>
          <div className="movie-card-info">
          
            <div className="movie-card-year">{movie.release_date ? movie.release_date.split('-')[0] : null}</div>
            <div className="movie-card-rating">{movie.vote_average}</div>
          </div>
          <div className="movie-card-description">{movie.overview ? movie.overview.substring(0, TRUNCATE_LENGTH) + '...' : 'Acest film nu are descriere.'}</div>
        </div>
      </div>
    </div>
  </Link>
);

export default MovieCard;