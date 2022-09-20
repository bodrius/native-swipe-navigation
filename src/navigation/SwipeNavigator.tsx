import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {
  TopScreen,
  HomeScreen,
  LeftScreen,
  RightScreen,
  BottomScreen,
  SecondBottomScreen,
} from '../screens';
import {Routes} from './routes';
import {windowWidth, windowHeight} from '../helpers';

const Stack = createStackNavigator();

export const SwipeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        gestureResponseDistance: 1000,
        detachPreviousScreen: false,
        freezeOnBlur: true,
      }}>
      <Stack.Screen
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          gestureResponseDistance: 500,
          gestureDirection: 'vertical-inverted',
        }}
      />

      <Stack.Screen
        name={Routes.TOP_SCREEN}
        component={TopScreen}
        options={{
          cardStyleInterpolator: props =>
            CardStyleInterpolators.forRevealFromBottomAndroid({
              ...props,
              inverted: -1,
            }),
          gestureResponseDistance: windowHeight / 2,
          gestureDirection: 'vertical-inverted',
        }}
      />

      <Stack.Screen
        name={Routes.LEFT_SCREEN}
        component={LeftScreen}
        options={{
          cardStyleInterpolator: props =>
            CardStyleInterpolators.forHorizontalIOS({...props, inverted: -1}),
          gestureDirection: 'horizontal-inverted',
          gestureResponseDistance: windowWidth / 2,
        }}
      />

      <Stack.Screen
        name={Routes.RIGHT_SCREEN}
        component={RightScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureDirection: 'horizontal',
          gestureResponseDistance: windowWidth / 2,
        }}
      />

      <Stack.Screen
        name={Routes.BOTTOM_SCREEN}
        component={BottomScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureResponseDistance: windowHeight / 2,
          gestureDirection: 'vertical',
          presentation: 'transparentModal',
        }}
      />

      <Stack.Screen
        name={Routes.SECOND_BOTTOM_SCREEN}
        component={SecondBottomScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
    </Stack.Navigator>
  );
};
