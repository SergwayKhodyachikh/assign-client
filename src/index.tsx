import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { theme } from './styles/theme';
import { CssBaseline, StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { GlobalStyle } from 'styles/global-style';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  // <React.StrictMode>
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      {/* Use also the ThemeProvider for Styled-Components so //you can access the theme in your own css */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>,
  /* </React.StrictMode> */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
