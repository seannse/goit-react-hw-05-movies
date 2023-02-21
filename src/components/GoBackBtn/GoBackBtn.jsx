import PropTypes from 'prop-types';
import { GoBack } from './GoBackBtn.style';

const GoBackBtn = ({ path }) => {
  return <GoBack to={path}>go back</GoBack>;
};

GoBackBtn.propTypes = {
  path: PropTypes.object.isRequired,
};

export default GoBackBtn;
