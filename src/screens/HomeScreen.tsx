import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Routes} from '../navigation';
import {SwipeGesture} from '../feature';
import {RouteService} from '../shared';

export const HomeScreen = () => {
  const onSwipeUp = () => RouteService.navigate(Routes.BOTTOM_SCREEN);
  const onSwipeLeft = () => RouteService.navigate(Routes.RIGHT_SCREEN);
  const onSwipeRight = () => RouteService.navigate(Routes.LEFT_SCREEN);
  const onSwipeDown = () => RouteService.navigate(Routes.TOP_SCREEN);

  return (
    <SwipeGesture
      onSwipeUp={onSwipeUp}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      onSwipeDown={onSwipeDown}>
      <View style={styles.layout}>
        <Text style={styles.name}>HOME SCREEN</Text>
      </View>
    </SwipeGesture>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'mediumslateblue',
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});
