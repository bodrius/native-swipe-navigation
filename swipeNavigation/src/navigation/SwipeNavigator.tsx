import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';

import {
  TopScreen,
  HomeScreen,
  LeftScreen,
  RightScreen,
  BottomScreen,
  SecondBottomScreen,
} from '../screens';
import {Routes} from './routes';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const SwipeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          gestureEnabled: false,
          gestureDirection: 'vertical',
          gestureResponseDistance: 5000,
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
        }}
      />

      <Stack.Screen name={Routes.TOP_SCREEN} component={TopScreen} />

      <Stack.Screen name={Routes.LEFT_SCREEN} component={LeftScreen} />

      <Stack.Screen name={Routes.RIGHT_SCREEN} component={RightScreen} />

      <Stack.Screen name={Routes.BOTTOM_SCREEN} component={BottomScreen} />

      <Stack.Screen
        name={Routes.SECOND_BOTTOM_SCREEN}
        component={SecondBottomScreen}
      />
    </Stack.Navigator>
  );
};
