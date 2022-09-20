import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {SwipeNavigator} from './navigation';
import {RouteService} from './shared/services';

const App = () => {
  return (
    <NavigationContainer ref={RouteService.navigationRef}>
      <SwipeNavigator />
    </NavigationContainer>
  );
};

export default App;
