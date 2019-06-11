import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import { useStore } from '../store';
import { GET } from '../utils/http-client';

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const Movie = styled.figure`
  height: 100%;
  margin: 0;
  padding: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
  }
`;

const AnimatedMovie = animated(Movie);

function Landing() {
  const [movies, setMovies] = useState([]);
  const transitions = useTransition(movies, movie => movie.id, {
    from: { opacity: 0, transform: 'translateY(50%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
    config: { mass: 5, tension: 1000, friction: 200 },
    trail: 20,
  });
  const [store] = useStore();
  const { images } = store.configuration;

  const getMovies = async () => {
    const response = await GET('/movie/popular');
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const items = movies.map((movie, index) => {
    return (
      <AnimatedMovie
        key={transitions[index].key}
        style={transitions[index].props}
      >
        <img
          src={`${images.base_url}/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </AnimatedMovie>
    );
  });

  return (
    <div>
      <Title>Movie News!</Title>
      <p>Popular...</p>
      <Grid>{items}</Grid>
    </div>
  );
}

export default Landing;
