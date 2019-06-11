import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useStore } from '../store';

const API_KEY = '97a5b47428f2d1e11f42317d0ce3c263';
const URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

function Configuration(props) {
  const { children } = props;
  const [store, dispatch] = useStore();
  const { isLoading } = store.configuration;

  const fetchConfiguration = async () => {
    dispatch({ type: 'FETCH_CONFIGURATION' });
    const response = await axios.get(URL);
    dispatch({ type: 'SET_CONFIGURATION', payload: response.data });
  };

  useEffect(() => {
    fetchConfiguration();
  }, []);
  return <div>{isLoading ? 'loading...' : children}</div>;
}

Configuration.propTypes = {
  children: PropTypes.any,
};

export default Configuration;
