import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'components';

// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetails';
// import HomePage from 'pages/HomePage/HomePage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import CastPage from 'pages/CastPage/CastPage';
// import ReviewsPage from 'pages/Reviews/Reviews';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetails')
);
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <ToastContainer />
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
        <Route path="*" element={'/'} />
      </Routes>
      {/* </Suspense> */}
    </div>
  );
};
