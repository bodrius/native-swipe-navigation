import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RouteService} from '../services';
import {Routes} from '../navigation';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', event => {
      console.log('event', event);
      // Do something
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.layout}>
      <Text style={styles.name}>HOME SCREEN</Text>

      <Button
        title="GO to TOP SCREEN"
        onPress={() => RouteService.navigate(Routes.TOP_SCREEN)}
      />
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
