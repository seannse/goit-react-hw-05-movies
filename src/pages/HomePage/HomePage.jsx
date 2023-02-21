import { useState, useEffect } from 'react';

import { Loader, MovieList } from 'components';

import API from 'services/API';

import { Container } from 'styles/Container.styled';

const api = new API();

function HomePage() {
  const [trends, setTrends] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTrends();
  }, []);

  async function getTrends() {
    try {
      setLoading(true);
      const { results } = await api.fetchTrends();
      setTrends(results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading && <Loader />}
      {Boolean(trends) && (
        <>
          <h1>Trending today</h1>
          <MovieList array={trends} />
        </>
      )}
    </Container>
  );
}

export default HomePage;
