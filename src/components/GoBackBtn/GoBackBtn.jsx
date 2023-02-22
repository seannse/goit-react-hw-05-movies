// import PropTypes from 'prop-types';
import GoBack from './GoBackBtn.style';

const GoBackBtn = ({ path }) => {
  console.log(path);
  return <GoBack to={path}>go back</GoBack>;
};

// GoBackBtn.propTypes = {
//   path: PropTypes.string.isRequired,
// };

export default GoBackBtn;
