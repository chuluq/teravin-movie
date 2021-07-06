import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../utils';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>Penyimpanan lokal telah diperbarui</Text>
      <TouchableOpacity style={styles.btn}>
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
