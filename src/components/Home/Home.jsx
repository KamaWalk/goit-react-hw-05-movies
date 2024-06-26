import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import Loader from '../Loader/Loader';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=4fed94ef3da30bdec32e141a4ca83f86'
    )
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={css.trendingMovies}>
      <h1>Trending Movies</h1>
      <ul className={css.trendingMoviesList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: 'Home' }}>
              <div>{movie.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;