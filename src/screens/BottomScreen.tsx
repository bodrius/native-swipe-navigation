import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Routes} from '../navigation';
import {RouteService} from '../shared';
import {SwipeGesture} from '../feature';

export const BottomScreen = () => {
  const onSwipeUp = () => RouteService.navigate(Routes.SECOND_BOTTOM_SCREEN);
  const onSwipeDown = () => RouteService.navigate(Routes.HOME_SCREEN);

  return (
    <SwipeGesture onSwipeDown={onSwipeDown} onSwipeUp={onSwipeUp}>
      <View style={styles.layout}>
        <Text style={styles.name}>BOTTOM SCREEN</Text>
      </View>
    </SwipeGesture>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgrey',
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});
