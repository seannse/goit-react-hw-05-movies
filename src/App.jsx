import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import MovieDetails from 'pages/MovieDetailsPage/MovieDetails';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import CastPage from 'pages/CastPage/CastPage';
import ReviewsPage from 'pages/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
        <Route path="*" element={'/'} />
      </Routes>
    </div>
  );
};
