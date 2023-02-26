import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Strings from '../constants/Strings';
import HomeScreen from '../screens/HomeScreen';
import AgendaScreen from '../screens/AgendaScreen';
import PlacesToVisitScreen from '../screens/PlacesToVisitScreen';
import ContactScreen from '../screens/ContactScreen';
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

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;
const {BLUE, WHITE} = Colors;
const {
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PLACESTOVISIT,
  ROUTE_AGENDA,
  AGENDA,
  PLACESTOVISIT,
  CONTACTS,
  SIGN_OUT,
} = Strings;

const AppStack: React.FC = () => {
  const {headerRightStyle} = styles;
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
          <TouchableOpacity style={headerRightStyle} onPress={() => signOut()}>
            <Text style={{color: WHITE, fontWeight: '500'}}>{SIGN_OUT}</Text>
          </TouchableOpacity>
        );

      case ROUTE_AGENDA:
        return (
          <TouchableOpacity
            style={headerRightStyle}
            onPress={() => dispatch(getAgenda())}>
            <Text style={{color: WHITE, fontWeight: '500'}}>Refresh</Text>
          </TouchableOpacity>
        );

      case ROUTE_CONTACT:
        return (
          <TouchableOpacity
            style={headerRightStyle}
            onPress={() => dispatch(getContacts())}>
            <Text style={{color: WHITE, fontWeight: '500'}}>Refresh</Text>
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
        name={ROUTE_CONTACT}
        component={ContactScreen}
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

const styles = StyleSheet.create({
  headerRightStyle: {height: 20, width: 60, marginRight: 10},
});

export {AppStack, LoginStack};
