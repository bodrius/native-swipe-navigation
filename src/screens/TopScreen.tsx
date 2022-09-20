import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Routes} from '../navigation';
import {RouteService} from '../shared';
import {SwipeGesture} from '../feature';

export const TopScreen = () => {
  const onSwipeUp = () => RouteService.navigate(Routes.HOME_SCREEN);

  return (
    <SwipeGesture onSwipeUp={onSwipeUp}>
      <View style={styles.layout}>
        <Text style={styles.name}>TOP SCREEN</Text>
      </View>
    </SwipeGesture>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'greenyellow',
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});
