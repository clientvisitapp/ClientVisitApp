import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ContactScreenCard from '../components/ContactScreenCard';
import VisitorsCard from '../components/VisitorsCard';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import {getContacts} from '../redux/slices/contactsSlice';
import {getVisitors} from '../redux/slices/visitorsSlice';
import {AppDispatch} from '../redux/store';
import {contactsType, visitorsType} from '../types';

const {BLUE, WHITE} = Colors;

const ContactScreen: React.FC = () => {
  const {ROUTE_CONTACT} = Strings;
  const route = useRoute();
  const dispatch = useDispatch<AppDispatch>();
  const {
    loader,
    contact: {contacts},
    visitor: {visitors},
  } = useSelector(
    (state: {
      loader: {isLoading: boolean};
      contact: {contacts: contactsType[]};
      visitor: {visitors: visitorsType[]};
    }) => state,
  );
  const isContactScreen = route?.name === ROUTE_CONTACT;

  useEffect(() => {
    isContactScreen ? dispatch(getContacts()) : dispatch(getVisitors());
  }, []);

  if (loader?.isLoading) {
    return (
      <ActivityIndicator
        color={BLUE}
        size="large"
        style={{flex: 1, justifyContent: 'center'}}
      />
    );
  }

  return (
    <View style={{backgroundColor: WHITE, flex: 1}}>
      <ScrollView>
        <Image
          style={styles.headerImage}
          source={require('../assets/HomeScreenHeader.png')}
        />
        {isContactScreen
          ? contacts?.map((item, index) => {
              return (
                <ContactScreenCard
                  key={index}
                  imageSource={item.imageSource}
                  nameText={item.name}
                  phoneText={item.phone}
                  mailText={item.email}
                />
              );
            })
          : visitors?.map((item, index) => {
              return (
                <VisitorsCard
                  key={index}
                  imageSource={item.imageSource}
                  nameText={item.name}
                  designationText={item.designation}
                />
              );
            })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 181,
  },
});

export default ContactScreen;
