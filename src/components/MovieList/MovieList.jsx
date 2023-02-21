import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

function MovieList({ array }) {
  const location = useLocation();

  return (
    <ul>
      {array.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// MovieList.propTypes = {
//   array: PropTypes.array(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ),
// };

export default MovieList;
