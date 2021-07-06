import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, URI } from './utils';
import { Provider } from 'react-redux';
import store from './redux/store';

import axios from 'axios';
import Loading from './components/Loading';
import Error from './components/Error';
import MovieItem from './components/MovieItem';
import Notification from './components/Notification';

export default function App() {
  const [movies, setMovies] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isTime, setTime] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    const res = await axios.get(`${URI}&page=${page}`);
    setMovies(res.data.results);
    setLoading(false);
  };

  const timing = () => {
    setInterval(() => {
      setTime(true);
    }, 60000);
  };

  useEffect(() => {
    try {
      fetchMovies();
      timing();
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  }, [isTime]);

  if (isLoading) return <Loading />;

  return (
    <Provider store={store}>
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
        {isTime && <Notification />}
      </SafeAreaView>
    </Provider>
  );
}

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
