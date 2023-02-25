import React from 'react';
import {ScrollView, View} from 'react-native';
import ContactScreenCard from '../components/ContactScreenCard';
import Colors from '../constants/Colors';
import {ContactScreenMockData} from '../mocks/mockData';

const {WHITE, GREY} = Colors;

const ContactScreen: React.FC = () => {
  return (
    <View style={{backgroundColor: GREY, flex: 1}}>
      <ScrollView>
        {ContactScreenMockData.map((mock, index) => {
          return (
            <ContactScreenCard
              key={index}
              imageSource={mock.imageSource}
              nameText={mock.name}
              phoneText={mock.phone}
              mailText={mock.mail}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ContactScreen;
