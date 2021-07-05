import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MovieItem from './MovieItem';

const ListMovie = () => {
  return (
    <ScrollView>
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ListMovie;
