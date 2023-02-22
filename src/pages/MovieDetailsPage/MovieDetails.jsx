import { useState, useEffect } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Container } from 'styles/Container.styled';

import API from 'services/API';
import { Aditional, Wrapper } from './MovieDetails.style';
import { GoBackBtn, Loader } from 'components';

const api = new API();

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getDetails(movieId);
  }, [movieId]);

  async function getDetails(movieId) {
    if (!movieId) return;
    try {
      setLoading(true);
      const details = await api.fetchByID(movieId);
      setMovieDetails(details);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  if (!movieDetails) return null;
  const { original_title, overview, poster_path, vote_average, genres } =
    movieDetails;

  const backPath = location.state?.from ?? '/';

  return (
    <Container>
      {loading && <Loader />}
      <GoBackBtn path={backPath} />
      <Wrapper>
        <div>
          <img
            src={poster_path && 'https://image.tmdb.org/t/p/w300' + poster_path}
            alt={original_title}
          />
        </div>
        <div>
          <h1>{original_title}</h1>
          <p>User score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </Wrapper>
      <Aditional>
        <h3>Aditional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backPath }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backPath }}>
              Reviews
            </Link>
          </li>
        </ul>
      </Aditional>
      <Outlet />
    </Container>
  );
}

export default MovieDetails;
