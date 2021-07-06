import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors } from '../utils';

const MovieItem = ({ title, date }) => {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 16, marginVertical: 14 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ marginTop: 8 }}>{date}</Text>
        <View style={styles.line} />
      </View>
    </ScrollView>
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
