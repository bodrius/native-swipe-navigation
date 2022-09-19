import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const TopScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.name}>TOP SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});
