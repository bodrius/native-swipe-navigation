import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Routes} from '../navigation';
import {RouteService} from '../shared';
import {SwipeGesture} from '../feature';

export const HomeScreen = () => {
  const onSwipeUp = () => RouteService.navigate(Routes.BOTTOM_SCREEN);
  const onSwipeLeft = () => RouteService.navigate(Routes.RIGHT_SCREEN);
  const onSwipeRight = () => RouteService.navigate(Routes.LEFT_SCREEN);
  const onSwipeDown = () => RouteService.navigate(Routes.TOP_SCREEN);

  return (
    <>
      <SwipeGesture
        onSwipeUp={onSwipeUp}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        onSwipeDown={onSwipeDown}>
        <View style={styles.layout}>
          <Text style={styles.name}>HOME SCREEN</Text>

          <Text style={{marginBottom: 30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eius inventore perspiciatis modi nam dolores quo alias ad laudantium
            repellat eum, commodi dolorem, cum, distinctio sit nihil!
            Praesentium maxime reprehenderit iusto numquam quisquam animi
            consequatur doloribus officia, sint, porro quasi. Consequatur rerum
            reiciendis at molestias ut aspernatur quisquam excepturi dolorem.
          </Text>

          <Text style={{marginBottom: 30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eius inventore perspiciatis modi nam dolores quo alias ad laudantium
            repellat eum, commodi dolorem, cum, distinctio sit nihil!
            Praesentium maxime reprehenderit iusto numquam quisquam animi
            consequatur doloribus officia, sint, porro quasi. Consequatur rerum
            reiciendis at molestias ut aspernatur quisquam excepturi dolorem.
          </Text>

          <Text style={{marginBottom: 30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eius inventore perspiciatis modi nam dolores quo alias ad laudantium
            repellat eum, commodi dolorem, cum, distinctio sit nihil!
            Praesentium maxime reprehenderit iusto numquam quisquam animi
            consequatur doloribus officia, sint, porro quasi. Consequatur rerum
            reiciendis at molestias ut aspernatur quisquam excepturi dolorem.
          </Text>
        </View>
      </SwipeGesture>

      <SafeAreaView edges={['bottom']} style={{backgroundColor: 'black'}} />
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'mediumslateblue',
    paddingHorizontal: 16,
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
});
