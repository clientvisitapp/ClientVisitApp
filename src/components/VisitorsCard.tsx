import React from 'react';
import {Image, Linking, Platform, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';

import {CustomText as Text} from './CustomText';

type VisitorsCardProps = {
  imageSource: string;
  nameText: string;
  phoneText: string;
  mailText: string;
};

const VisitorsCard: React.FC<VisitorsCardProps> = ({
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
  console.log('reached');
  return (
    <View
      style={[
        card,
        Platform.select({
          android: {elevation: 5},
          ios: {
            shadowOpacity: 0.2,
            shadowOffset: {width: 0 - 0, height: 0 - 0},
          },
        }),
      ]}>
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
    padding: 16,
    borderRadius: 4,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GREY,
    borderWidth: 1,
  },
  DPIconImage: {
    width: 95,
    height: 95,
    borderRadius: 95 / 2,
  },
  detailsCard: {
    paddingLeft: 16,
    backgroundColor: Colors.WHITE,
    flexShrink: 1,
  },
  nameTextStyle: {
    marginTop: 16,
    fontWeight: '400',
    fontSize: 14,
  },
  phoneTextStyle: {
    marginVertical: 8,
    fontWeight: '400',
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  mailTextStyle: {
    marginBottom: 16,
    fontWeight: '400',
    fontSize: 14,
  },
});

export default VisitorsCard;
