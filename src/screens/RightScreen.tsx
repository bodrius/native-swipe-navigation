import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Routes} from '../navigation';
import {RouteService} from '../shared';

export const RightScreen = ({navigation}: any) => {
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
      <Text style={styles.name}>RIGHT SCREEN</Text>
    </View>
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
