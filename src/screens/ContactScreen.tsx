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
import Colors from '../constants/Colors';
import {getContacts} from '../redux/slices/contactsSlice';
import {AppDispatch} from '../redux/store';
import {contactsType} from '../types';

const {BLUE, WHITE} = Colors;

const ContactScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {loader, contact} = useSelector(
    (state: {
      loader: {isLoading: boolean};
      contact: {contacts: contactsType[]};
    }) => state,
  );
  const {contacts} = contact;

  useEffect(() => {
    dispatch(getContacts());
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
          source={require('../assets/HomeScreenHeaderImage.png')}
        />
        {contacts?.map((item, index) => {
          return (
            <ContactScreenCard
              key={index}
              imageSource={item.imageSource}
              nameText={item.name}
              phoneText={item.phone}
              mailText={item.email}
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
    height: 118,
  },
});

export default ContactScreen;
