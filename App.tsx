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
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <Provider store={store}>
      {isLoading ? <SplashScreen /> : <RootNavigator />}
      {/* {<Dummy/>} */}
    </Provider>
  );
}

export default App;
