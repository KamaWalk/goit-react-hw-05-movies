import React, { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Loader from '../Loader/Loader';
import css from './MovieDetails.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const origin = location.state?.from;

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=4fed94ef3da30bdec32e141a4ca83f86`
    )
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, [movieId]);

  const goBack = () => {
    if (origin === 'Movies') {
      navigate('/movies');
    } else {
      navigate('/');
    }
  };

  return (
    <div className={css.movieDetailsDiv}>
      <div className={css.movieDetails}>
        <button className={css.goBackButton} onClick={goBack}>
          Back
        </button>
        <img
          className={css.movieDetailsImg}
          src={
            movie && movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie ? movie.title : ''}
        />
      </div>
      <div className={css.movieDetailsDescr}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h1>{movie ? movie.title : ''}</h1>
            <p>
              <strong>Overview:</strong> {movie ? movie.overview : ''}
            </p>
            <p>
              <strong>Genres:</strong>{' '}
              {movie &&
                movie.genres &&
                movie.genres.map(genre => genre.name).join(', ')}
            </p>
            <p>
              <strong>Release Date:</strong> {movie ? movie.release_date : ''}
            </p>
            <p>
              <strong>Rating:</strong> {movie ? movie.vote_average : ''} / 10
            </p>
            <div>
              <Link to="cast" state={{ from: origin }}>
                Cast
              </Link>{' '}
              |{' '}
              <Link to="reviews" state={{ from: origin }}>
                Reviews
              </Link>
            </div>
            <Outlet loading={loading} />
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;