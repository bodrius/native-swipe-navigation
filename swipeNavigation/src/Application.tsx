import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {RouteService} from './services';
import {SwipeNavigator} from './navigation';

const App = () => {
  return (
    <NavigationContainer ref={RouteService.navigationRef}>
      <SwipeNavigator />
    </NavigationContainer>
  );
};

export default App;
