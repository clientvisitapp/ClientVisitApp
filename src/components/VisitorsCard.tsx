import React from 'react';
import {Image, Linking, Platform, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';

import {CustomText as Text} from './CustomText';

type VisitorsCardProps = {
  imageSource: string;
  nameText: string;
  designationText: string;
};

const VisitorsCard: React.FC<VisitorsCardProps> = ({
  nameText,
  designationText,
  imageSource,
}) => {
  const {card, DPIconImage, detailsCard, nameTextStyle, designationTextStyle} =
    styles;
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
        <Text style={nameTextStyle}>Gokul</Text>
        <Text style={designationTextStyle}>Chief Executive Officer</Text>
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
    marginTop: 20,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
  },
  phoneTextStyle: {
    marginVertical: 8,
    fontWeight: '400',
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  designationTextStyle: {
    marginTop: 8,
    marginBottom: 20,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
});

export default VisitorsCard;
