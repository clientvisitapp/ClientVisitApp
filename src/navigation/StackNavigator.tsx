import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Strings from '../constants/Strings';
import HomeScreen from '../screens/HomeScreen';
import AgendaScreen from '../screens/AgendaScreen';
import PlacesToVisitScreen from '../screens/PlacesToVisitScreen';
import CardsScreen from '../screens/CardsScreen';
import Colors from '../constants/Colors';
import BackIcon from '../assets/icons/BackIcon';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {clearAuthData} from '../redux/slices/authSlice';
import SignInScreen from '../screens/SignInScreen';
import {getAgenda} from '../redux/slices/agendaSlice';
import {getContacts} from '../redux/slices/contactsSlice';
import RefreshIcon from '../assets/icons/RefreshIcon';
import SignOutIcon from '../assets/icons/SignOutIcon';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;
const {BLUE, WHITE} = Colors;
const {
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PLACESTOVISIT,
  ROUTE_VISITORS,
  ROUTE_AGENDA,
  AGENDA,
  PLACESTOVISIT,
  CONTACTS,
  SIGN_OUT,
  VISITORS,
} = Strings;

const AppStack: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const headerLeft = (navigation: any) => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <BackIcon />
    </TouchableOpacity>
  );

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('@AuthData');
      dispatch(clearAuthData());
    } catch (error) {
      console.log('from local storage', error);
    }
  };

  const getHeaderRight = (route: any) => {
    switch (route.name) {
      case ROUTE_HOME:
        return (
          <TouchableOpacity onPress={() => signOut()}>
            <SignOutIcon />
          </TouchableOpacity>
        );

      case ROUTE_AGENDA:
        return (
          <TouchableOpacity onPress={() => dispatch(getAgenda())}>
            <RefreshIcon />
          </TouchableOpacity>
        );

      case ROUTE_CONTACT:
        return (
          <TouchableOpacity onPress={() => dispatch(getContacts())}>
            <RefreshIcon />
          </TouchableOpacity>
        );

      default:
        return null;
    }
  };

  return (
    <Navigator
      screenOptions={({route, navigation}) => ({
        headerStyle: {backgroundColor: BLUE},
        headerTintColor: WHITE,
        headerLeft: () => headerLeft(navigation),
        headerRight: () => getHeaderRight(route),
      })}>
      <Screen
        name={ROUTE_HOME}
        component={HomeScreen}
        options={{
          headerTitle: '',
          headerLeft: () => null,
        }}
      />
      <Screen
        name={ROUTE_AGENDA}
        component={AgendaScreen}
        options={{headerTitle: AGENDA, headerTitleAlign: 'center'}}
      />
      <Screen
        name={ROUTE_PLACESTOVISIT}
        component={PlacesToVisitScreen}
        options={{headerTitle: PLACESTOVISIT, headerTitleAlign: 'center'}}
      />
      <Screen
        name={ROUTE_VISITORS}
        component={CardsScreen}
        options={{headerTitle: VISITORS, headerTitleAlign: 'center'}}
      />
      <Screen
        name={ROUTE_CONTACT}
        component={CardsScreen}
        options={{headerTitle: CONTACTS, headerTitleAlign: 'center'}}
      />
    </Navigator>
  );
};

const LoginStack: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name={'signin'}
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Screen
        name={'main'}
        component={AppStack}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export {AppStack, LoginStack};
