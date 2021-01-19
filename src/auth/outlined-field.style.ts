import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const OutlinedField = styled(TextField).attrs(({ helperText }) => ({
  variant: 'outlined',
  helperText: helperText ? helperText : ' ',
}))`
  margin-bottom: 0.5rem;
`;
