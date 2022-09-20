import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Routes} from '../navigation';
import {RouteService} from '../shared';
import {SwipeGesture} from '../feature';

export const SecondBottomScreen = () => {
  const onSwipeDown = () => RouteService.navigate(Routes.BOTTOM_SCREEN);

  return (
    <SwipeGesture onSwipeDown={onSwipeDown}>
      <View style={styles.layout}>
        <Text style={styles.name}>SECOND BOTTOM SCREEN</Text>
      </View>
    </SwipeGesture>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});
