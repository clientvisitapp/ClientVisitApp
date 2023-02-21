import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Strings from '../constants/Strings';
import HomeScreen from '../screens/HomeScreen';
import AgendaScreen from '../screens/AgendaScreen';
import PlacesToVisitScreen from '../screens/PlacesToVisitScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;
const {ROUTE_CONTACT, ROUTE_HOME, ROUTE_PLACESTOVISIT, ROUTE_AGENDA} = Strings;

const HomeStackNavigator: React.FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={ROUTE_HOME} component={HomeScreen} />
      <Screen name={ROUTE_AGENDA} component={AgendaScreen} />
      <Screen name={ROUTE_PLACESTOVISIT} component={PlacesToVisitScreen} />
    </Navigator>
  );
};

const ContactStackNavigator: React.FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={ROUTE_CONTACT} component={ContactScreen} />
    </Navigator>
  );
};

export {HomeStackNavigator, ContactStackNavigator};
