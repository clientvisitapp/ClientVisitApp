import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import TabNavigator from './TabNavigator';
import {useDispatch, useSelector} from 'react-redux';
import SignInScreen from '../screens/SignInScreen';
import {AppStack, LoginStack} from './StackNavigator';
import {AppDispatch} from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {clearAuthData, updateAuthData} from '../redux/slices/authSlice';

const RootNavigator: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {authData} = useSelector(
    (state: {auth: {authData: null | {name: string; password: string}}}) =>
      state.auth,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLocalStorage();
  }, []);

  const checkLocalStorage = async () => {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        dispatch(updateAuthData(JSON.parse(authDataSerialized)));
      } else dispatch(clearAuthData());
    } catch (error) {
      console.log('from local storage', error);
    }
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 100);

  if (isLoading) return null;

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <SignInScreen />}
    </NavigationContainer>
  );
};

export default RootNavigator;
