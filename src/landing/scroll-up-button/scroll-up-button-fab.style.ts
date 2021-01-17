import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';

export const ScrollUpButtonFab = styled(Fab).attrs({
  color: 'primary',
  onClick: () => window.scrollTo({ behavior: 'smooth', top: 0 }),
})`
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  font-size: 2rem;
`;
