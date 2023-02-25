import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ContactScreenCard from '../components/ContactScreenCard';
import Colors from '../constants/Colors';
import {getContacts} from '../redux/slices/contactsSlice';
import {AppDispatch} from '../redux/store';
import {contactsType} from '../types';

const {WHITE, GREY} = Colors;

const ContactScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {contacts} = useSelector(
    (state: {contact: {contacts: contactsType[]}}) => state.contact,
  );

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <View style={{backgroundColor: GREY, flex: 1}}>
      <ScrollView>
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

export default ContactScreen;
