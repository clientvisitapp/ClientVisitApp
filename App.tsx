/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/redux/store';
import Dummy from './src/screens/Dummy';
import SplashScreen from './src/screens/SplashScreen';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
