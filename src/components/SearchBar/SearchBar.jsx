import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Img, Input, SearchForm, Button, Wrapper } from './SearchBar.styled';
import { useSearchParams } from 'react-router-dom';

function Searchbar({ defaultValue, disabled }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.search.value.trim().toLowerCase();

    if (!query) {
      toast.error('Enter a valid search query');
      return;
    }

    if (searchParams.get('query') === query) {
      toast.error('Already found');
    }

    setSearchParams({ query });
  }

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <Img />
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
          disabled={disabled}
          defaultValue={defaultValue}
        />
      </SearchForm>
    </Wrapper>
  );
}

Searchbar.propTypes = {
  disabled: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string,
};

export default Searchbar;
