import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Routes} from '../navigation';
import {RouteService} from '../shared';

export const TopScreen = ({navigation}: any) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'transitionStart',
      (event: any) => {
        event.data?.closing && RouteService.navigate(Routes.HOME_SCREEN);
      },
    );

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.layout}>
      <Text style={styles.name}>TOP SCREEN</Text>

      <Text style={{marginBottom: 30}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius
        inventore perspiciatis modi nam dolores quo alias ad laudantium repellat
        eum, commodi dolorem, cum, distinctio sit nihil! Praesentium maxime
        reprehenderit iusto numquam quisquam animi consequatur doloribus
        officia, sint, porro quasi. Consequatur rerum reiciendis at molestias ut
        aspernatur quisquam excepturi dolorem.
      </Text>

      <Text style={{marginBottom: 30}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius
        inventore perspiciatis modi nam dolores quo alias ad laudantium repellat
        eum, commodi dolorem, cum, distinctio sit nihil! Praesentium maxime
        reprehenderit iusto numquam quisquam animi consequatur doloribus
        officia, sint, porro quasi. Consequatur rerum reiciendis at molestias ut
        aspernatur quisquam excepturi dolorem.
      </Text>

      <Text style={{marginBottom: 30}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius
        inventore perspiciatis modi nam dolores quo alias ad laudantium repellat
        eum, commodi dolorem, cum, distinctio sit nihil! Praesentium maxime
        reprehenderit iusto numquam quisquam animi consequatur doloribus
        officia, sint, porro quasi. Consequatur rerum reiciendis at molestias ut
        aspernatur quisquam excepturi dolorem.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'greenyellow',
    paddingHorizontal: 16,
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
});
