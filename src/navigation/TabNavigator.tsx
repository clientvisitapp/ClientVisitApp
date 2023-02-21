import React from 'react';

import Home from '../assets/icons/HomeIcon';
import Contact from '../assets/icons/ContactIcon';
import Back from '../assets/icons/BackIcon';
import Close from '../assets/icons/CloseIcon';
import ContactIcon from '../assets/icons/ContactsIcon';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import {TouchableOpacity, View} from 'react-native';
import {ContactStackNavigator, HomeStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;

const TabNavigator: React.FC = () => {
  const {BLACK, BLUE, WHITE} = Colors;
  const {
    AGENDA,
    CONTACTS,
    PLACESTOVISIT,
    ROUTE_CONTACT,
    ROUTE_CONTACT_TAB,
    ROUTE_HOME,
    ROUTE_HOME_TAB,
    ROUTE_PLACESTOVISIT,
    ROUTE_AGENDA,
  } = Strings;

  const getHeaderTitle = (route: RouteProp<ParamListBase>) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;

    switch (routeName) {
      case ROUTE_PLACESTOVISIT:
        return PLACESTOVISIT;
      case ROUTE_AGENDA:
        return AGENDA;
      case ROUTE_CONTACT_TAB:
        return CONTACTS;
      default:
        return '';
    }
  };

  const getHeaderLeft = (route: RouteProp<ParamListBase>, navigation: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;

    switch (routeName) {
      case ROUTE_PLACESTOVISIT:
        return (
          <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => goBack(navigation)}>
            <Close />
          </TouchableOpacity>
        );
      case ROUTE_AGENDA:
        return (
          <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => goBack(navigation)}>
            <Back />
          </TouchableOpacity>
        );
      case ROUTE_CONTACT_TAB:
        return (
          <View style={{marginLeft: 15}}>
            <ContactIcon />
          </View>
        );
      default:
        return null;
    }
  };

  const goBack = (navigation: any) => navigation.goBack();

  const renderIcon = ({
    color,
    focused,
    route,
  }: {
    color: string;
    focused: boolean;
    size?: number;
    route: {name: string};
  }) => {
    let iconColor = focused ? BLUE : color;

    return route.name === 'HomeTab' ? (
      <Home color={iconColor} />
    ) : (
      <Contact color={iconColor} />
    );
  };

  return (
    <Navigator
      screenOptions={({route}) => ({
        headerTitle: '',
        headerStyle: {backgroundColor: BLACK},
        headerTitleStyle: {color: WHITE},
        tabBarIcon: props => renderIcon({...props, route}),
        tabBarStyle: {paddingBottom: 6, height: 56, paddingTop: 10},
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarActiveTintColor: BLACK,
      })}>
      <Screen
        name={ROUTE_HOME_TAB}
        component={HomeStackNavigator}
        options={({route, navigation}) => ({
          tabBarLabel: ROUTE_HOME,
          headerTitle: getHeaderTitle(route),
          headerTitleAlign: 'center',
          headerLeft: () => getHeaderLeft(route, navigation),
        })}
      />
      <Screen
        name={ROUTE_CONTACT_TAB}
        component={ContactStackNavigator}
        options={({route, navigation}) => ({
          tabBarLabel: ROUTE_CONTACT,
          headerTitle: getHeaderTitle(route),
          headerTitleAlign: 'center',
          headerLeft: () => getHeaderLeft(route, navigation),
        })}
      />
    </Navigator>
  );
};

export default TabNavigator;
