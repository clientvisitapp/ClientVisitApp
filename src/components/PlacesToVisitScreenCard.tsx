import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';

import {CustomText as Text} from './CustomText';

type PlacesToVisitScreenCardProps = {
  heading: string;
  imageSource: any;
};

const PlacesToVisitScreenCard: React.FC<PlacesToVisitScreenCardProps> = ({
  heading,
  imageSource,
}) => {
  const {headingStyle, text, cardView} = styles;

  return (
    <>
      <View style={headingStyle}>
        <Text style={text}>{heading}</Text>
      </View>
      <Image source={imageSource} style={cardView} />
    </>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginTop: 12,
    marginBottom: 8,
    backgroundColor: Colors.WHITE,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 50,
    marginLeft: 16,
  },
  cardView: {
    height: 171,
    width: 357,
    borderRadius: 4,
    marginBottom: 14,
    marginHorizontal: 16,
  },
});

export default PlacesToVisitScreenCard;
