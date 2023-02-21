import React from 'react';

import {CustomText as Text} from './CustomText';
import AgendaIcon from '../assets/icons/AgendaIcon';
import PlacesToVisitIcon from '../assets/icons/PlacesToVisitIcon';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

type HomeScreenCardProps = {
  title: string;
  imageSource: any;
  onPress?: () => void;
};

const HomeScreenCard: React.FC<HomeScreenCardProps> = ({
  title,
  imageSource,
  onPress,
}) => {
  const {heading, iconStyle, text, cardView} = styles;
  const {AGENDA} = Strings;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={heading}>
        {title === AGENDA ? (
          <AgendaIcon style={iconStyle} />
        ) : (
          <PlacesToVisitIcon style={iconStyle} />
        )}
        <Text style={text}>{title}</Text>
      </View>
      <Image source={imageSource} style={cardView} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    marginBottom: 8,
    backgroundColor: Colors.WHITE,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 9.5,
  },
  cardView: {
    height: 179,
    width: 357,
    borderRadius: 4,
    marginBottom: 8,
    marginLeft: 17,
  },
  iconStyle: {marginLeft: 15},
});

export default HomeScreenCard;
