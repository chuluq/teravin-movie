import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../utils';

const Error = ({ errorMessage }) => {
  return (
    <View style={styles.center}>
      <Image source={require('../assets/error.png')} style={styles.image} />
      <Text style={styles.errorText}>Network Error: {errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  errorText: {
    color: colors.primaryRed,
    marginTop: 8,
    fontSize: 16,
  },
});

export default Error;
