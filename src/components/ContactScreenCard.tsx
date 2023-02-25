import React from 'react';
import {Image, Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';

import {CustomText as Text} from './CustomText';

type ContactScreenProps = {
  imageSource: any;
  nameText: string;
  phoneText: string;
  mailText: string;
};

const ContactScreenCard: React.FC<ContactScreenProps> = ({
  nameText,
  phoneText,
  mailText,
  imageSource,
}) => {
  const {
    card,
    DPIconImage,
    detailsCard,
    nameTextStyle,
    phoneTextStyle,
    mailTextStyle,
  } = styles;

  return (
    <View style={card}>
      <Image source={{uri: imageSource}} style={DPIconImage} />
      <View style={detailsCard}>
        <Text style={nameTextStyle}>{nameText}</Text>
        <Text
          style={phoneTextStyle}
          onPress={() => Linking.openURL(`tel:${phoneText}`)}>
          {phoneText}
        </Text>
        <Text style={mailTextStyle}>{mailText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 360,
    height: 120,
    padding: 16,
    borderRadius: 4,
    marginVertical: 8,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0 - 0, height: 0 - 0},
  },
  DPIconImage: {
    width: 71.67,
    height: 71.67,
    borderRadius: 71.67 / 2,
    position: 'absolute',
    top: 24.17,
    left: 15.17,
  },
  detailsCard: {
    marginLeft: 94,
    backgroundColor: Colors.WHITE,
  },
  nameTextStyle: {
    width: 218,
    height: 18,
    marginTop: 16,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  phoneTextStyle: {
    width: 200,
    height: 18,
    marginVertical: 8,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  mailTextStyle: {
    width: 218,
    height: 36,
    marginBottom: 16,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
});

export default ContactScreenCard;
