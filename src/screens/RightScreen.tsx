import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Routes} from '../navigation';
import {RouteService} from '../shared';
import {SwipeGesture} from '../feature';

export const RightScreen = () => {
  const onSwipeRight = () => RouteService.navigate(Routes.HOME_SCREEN);

  return (
    <SwipeGesture onSwipeRight={onSwipeRight}>
      <View style={styles.layout}>
        <Text style={styles.name}>RIGHT SCREEN</Text>
      </View>
    </SwipeGesture>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkseagreen',
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});
