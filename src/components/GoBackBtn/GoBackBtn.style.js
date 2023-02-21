import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBack = styled(Link)`
  text-transform: uppercase;
  text-decoration-line: none;
  display: inline-block;
  padding: 10px;
  font-weight: 500;
  border-radius: 4px;
  text-align: center;
  background-color: antiquewhite;
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.55);

  :hover,
  :focus {
    transform: translateY(2px);
    box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.55);
  }
`;
