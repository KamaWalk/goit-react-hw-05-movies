import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import css from './Cast.module.css'

const defaultImg = 'https://via.placeholder.com/200x300?text=No+Image';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4fed94ef3da30bdec32e141a4ca83f86`
    )
      .then(response => response.json())
      .then(data => {
        setCast(data.cast);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cast:', error);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) return <Loader />;

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(person => (
          <li className={css.castList}
            key={person.cast_id}
          >
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                  : defaultImg
              }
              alt={person.name}
              className={css.castImg}
            />
            {person.name} as {person.character}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;