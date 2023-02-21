import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.45);
  font-weight: 600;
`;

export const NavItem = styled(NavLink)`
  margin-right: 30px;
  font-size: 20px;
  text-decoration: none;
  transition-property: border-bottom;
  transition-delay: 250ms;
  transition-timing-function: ease;

  &.active {
    color: red;
  }

  /* :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  } */

  :hover,
  :focus-visible {
    border-bottom: 4px solid red;
  }
`;
