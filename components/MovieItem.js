import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils';

const MovieItem = () => {
  return (
    <View style={{ marginHorizontal: 16, marginVertical: 14 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Spider-Man</Text>
      <Text style={{ marginTop: 8 }}>26th May, 2022</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: colors.primaryBlue,
    borderBottomWidth: 1,
    marginTop: 12,
  },
});

export default MovieItem;
