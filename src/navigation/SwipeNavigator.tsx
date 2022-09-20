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

const Stack = createStackNavigator();

export const SwipeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME_SCREEN}
      screenOptions={{
        headerStyle: {backgroundColor: 'tomato'},
        gestureEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          presentation: 'transparentModal',
        }}
      />

      <Stack.Screen
        name={Routes.TOP_SCREEN}
        component={TopScreen}
        options={{
          cardStyleInterpolator: props =>
            CardStyleInterpolators.forVerticalIOS({
              ...props,
              inverted: -1,
            }),
        }}
      />

      <Stack.Screen
        name={Routes.LEFT_SCREEN}
        component={LeftScreen}
        options={{
          cardStyleInterpolator: props =>
            CardStyleInterpolators.forHorizontalIOS({...props, inverted: -1}),
        }}
      />

      <Stack.Screen
        name={Routes.RIGHT_SCREEN}
        component={RightScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name={Routes.BOTTOM_SCREEN}
        component={BottomScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
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
