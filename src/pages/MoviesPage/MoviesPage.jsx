import { useEffect, useState } from 'react';
import { Loader, MovieList, SearchBar } from 'components';

import API from 'services/API';
import { Container } from 'styles/Container.styled';
import { useSearchParams } from 'react-router-dom';

const api = new API();

function MoviesPage() {
  const [disabled, setDisabled] = useState(false);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    getMovies(query);
  }, [query]);

  async function getMovies(search) {
    try {
      setLoading(true);
      setDisabled(true);
      api.query = search;
      const { results } = await api.fetchQuery();
      setMovies(results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setDisabled(false);
      setLoading(false);
    }
  }

  return (
    <Container>
      <SearchBar defaultValue={query} disabled={disabled} />
      {loading && <Loader />}
      {!!movies?.length && <MovieList array={movies} />}
      {movies && !movies.length && <p>Nothing found</p>}
    </Container>
  );
}

export default MoviesPage;
