import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
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
      <Image source={imageSource} style={DPIconImage} />
      <View style={detailsCard}>
        <Text style={nameTextStyle}>{nameText}</Text>
        <Text style={phoneTextStyle}>{phoneText}</Text>
        <Text style={mailTextStyle}>{mailText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 390,
    height: 116,
    marginTop: 24,
    marginBottom: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  DPIconImage: {
    width: 104,
    height: 104,
    borderRadius: 104 / 2,
    marginLeft: 12,
  },
  detailsCard: {
    width: 254,
    height: 116,
    marginLeft: 8,
    borderRadius: 4,
    backgroundColor: Colors.WHITE,
  },
  nameTextStyle: {
    width: 240,
    height: 20,
    marginTop: 8,
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
  },
  phoneTextStyle: {
    width: 216,
    height: 18,
    marginVertical: 12,
    marginLeft: 8,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  mailTextStyle: {
    width: 175,
    height: 33,
    marginBottom: 13,
    marginLeft: 8,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
});

export default ContactScreenCard;
