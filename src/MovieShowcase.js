import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = (movieArray) => {
    return movieArray.map(movie => <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}
