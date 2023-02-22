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
  // if (!cast) return null;

  return (
    <>
      <h2>Cast</h2>
      <List>
        {cast?.length > 0 ? (
          cast.map(({ name, character, id, profile_path }) => (
            <Item key={id}>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w200' + profile_path
                    : 'data:image/png;base64,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'
                }
                alt={name}
                width="200px"
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
