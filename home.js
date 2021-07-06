import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './utils';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllMovies,
  fetchMovies,
  showNotification,
} from './redux/movieSlice';

import Loading from './components/Loading';
import Error from './components/Error';
import MovieItem from './components/MovieItem';
import Notification from './components/Notification';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);

  const movieStatus = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);
  const notification = useSelector((state) => state.movies.notification);

  useEffect(() => {
    if (movieStatus === 'idle') {
      dispatch(
        fetchMovies(
          'https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf&page=1'
        )
      );
    }

    setInterval(() => {
      dispatch(showNotification());
    }, 60000);
  }, [movieStatus, dispatch]);

  if (movieStatus === 'loading') {
    return <Loading />;
  }

  if (movieStatus === 'error') {
    return <Error errorMessage={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.header}>Movie List</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <MovieItem title={item.original_title} date={item.release_date} />
          );
        }}
      />
      {notification && <Notification />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightWhite,
  },
  header: {
    color: colors.primaryBlue,
    margin: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontWeight: '600',
    fontSize: 24,
    letterSpacing: 5,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Home;
