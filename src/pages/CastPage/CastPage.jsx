import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import API from 'services/API';
import { Item, List } from './CastPage.style';

const api = new API();

function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getDetails(movieId);
  }, [movieId]);

  async function getDetails(id) {
    try {
      const data = await api.fetchCast(id);
      setCast(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  if (!cast) return null;

  return (
    <>
      <h2>Cast</h2>
      <List>
        {cast.length > 0 ? (
          cast.map(({ name, character, id, profile_path }) => (
            <Item key={id}>
              <img
                src={
                  profile_path &&
                  'https://image.tmdb.org/t/p/w200' + profile_path
                }
                alt="{name}"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </Item>
          ))
        ) : (
          <p>We don't have any cast for this movie.</p>
        )}
      </List>
    </>
  );
}

export default CastPage;
