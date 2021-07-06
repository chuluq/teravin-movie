import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { hideNotification, fetchMovies } from '../redux/movieSlice';
import { colors } from '../utils';

const Notification = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(null);

  const min = Math.ceil(1);
  const max = Math.floor(500);

  useEffect(() => {
    const number = Math.floor(Math.random() * (max - min) + min);
    setPage(number);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.details}>Penyimpanan lokal telah diperbarui</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          dispatch(hideNotification());
          dispatch(
            fetchMovies(
              `https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf&page=${page}`
            )
          );
        }}
      >
        <Text style={{ paddingVertical: 8, paddingHorizontal: 12 }}>
          Tampilkan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primaryBlue,
    zIndex: 10,
  },
  details: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: colors.lightWhite,
  },
  btn: {
    backgroundColor: 'gold',
    margin: 8,
    borderRadius: 8,
  },
});

export default Notification;
