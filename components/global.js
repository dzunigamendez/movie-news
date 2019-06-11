import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Typography from 'typography';
import theme from 'typography-theme-de-young';

export const typography = new Typography(theme);

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${typography.toString()}

  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

function Global({ children }) {
  return (
    <main>
      <GlobalStyle />
      {children}
    </main>
  );
}

Global.propTypes = {
  children: PropTypes.any,
};

export default Global;
