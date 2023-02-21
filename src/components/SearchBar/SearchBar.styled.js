import { ImSearch } from 'react-icons/im';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 30px;
  margin-bottom: 30px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 2px solid hsl(234deg 48% 34%);
`;

const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-right: 2px solid hsl(234deg 48% 34%);

  :hover {
    opacity: 1;
  }
`;

const Img = styled(ImSearch)`
  height: 20px;
  width: 20px;
`;
const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export { SearchForm, Img, Input, Button, Wrapper };
