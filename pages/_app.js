import React from 'react';
import App, { Container } from 'next/app';
import { Provider, initialState, reducer } from '../store';
import Global from '../components/global';
import { GET } from '../utils/http-client';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const response = await GET('/configuration');
    const configuration = response.data;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, configuration };
  }

  render() {
    const { Component, pageProps, configuration } = this.props;
    const state = { ...initialState, configuration };

    return (
      <Container>
        <Global>
          <Provider initialState={state} reducer={reducer}>
            <Component {...pageProps} />
          </Provider>
        </Global>
      </Container>
    );
  }
}

export default MyApp;
