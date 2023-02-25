import React from 'react';

import {CustomText as Text} from './CustomText';
import AgendaIcon from '../assets/icons/AgendaIcon';
import PlacesToVisitIcon from '../assets/icons/PlacesToVisitIcon';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import ContactIcon from '../assets/icons/ContactIcon';

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
  const {heading, iconStyle, text} = styles;
  const {AGENDA, PLACESTOVISIT} = Strings;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={heading}>
        {title === AGENDA ? (
          <AgendaIcon style={iconStyle} />
        ) : title === PLACESTOVISIT ? (
          <PlacesToVisitIcon style={iconStyle} />
        ) : (
          <ContactIcon style={iconStyle} />
        )}
        <Text style={text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 360,
    height: 90,
    borderRadius: 4,
    marginLeft: 16,
    marginVertical: 16,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GREY,
    borderWidth: 1,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0 - 0, height: 0 - 0},
  },
  text: {
    width: 207,
    height: 30,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    marginLeft: 29,
  },
  iconStyle: {marginLeft: 19},
});

export default HomeScreenCard;
