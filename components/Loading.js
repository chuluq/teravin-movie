import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { colors } from '../utils';

const Loading = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size='large' color={colors.primaryBlue} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
