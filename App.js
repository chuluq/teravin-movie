import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './utils';
import ListMovie from './components/ListMovie';
import Notification from './components/Notification';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.header}>Movie List</Text>
      <ListMovie />
      <Notification />
    </SafeAreaView>
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
    textTransform: 'capitalize',
  },
});
