import { Container } from 'styles/Container.styled';
import { Header, NavItem } from './AppBar.styled';

function AppBar() {
  return (
    <Header>
      <Container>
        <nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </nav>
      </Container>
    </Header>
  );
}

export default AppBar;
