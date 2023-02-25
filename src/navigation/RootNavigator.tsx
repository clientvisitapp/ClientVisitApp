import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './TabNavigator';
import {useSelector} from 'react-redux';
import SignInScreen from '../screens/SignInScreen';
import {AppStack} from './StackNavigator';

const RootNavigator: React.FC = () => {
  const {authData} = useSelector(
    (state: {auth: {authData: null | {name: string; password: string}}}) =>
      state.auth,
  );

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <SignInScreen />}
    </NavigationContainer>
  );
};

export default RootNavigator;
