import { useSelector } from 'react-redux';

const page = useSelector((state) => state.movies.page);

export const colors = {
  primaryBlue: '#0E6DA3',
  primaryRed: '#A30E0E',
  lightWhite: '#FDFDFD',
};

export const URI = `https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf&page=${page}`;
