import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomText as Text} from './CustomText';
import Colors from '../constants/Colors';

type ActivityProps = {
  header: string;
  description: string;
  location: string;
  time: string;
  team: string;
};

const {WHITE, GREY} = Colors;

const ActivityCard: React.FC<ActivityProps> = ({
  header,
  description,
  location,
  time,
  team,
}) => {
  const {activityCard, activityText, generalText, timeText} = styles;

  return (
    <View style={activityCard}>
      <Text style={activityText}>{header}</Text>
      <Text style={timeText}>{time}</Text>
      <Text style={generalText}>{description}</Text>
      <Text style={generalText}>{location}</Text>
      <Text style={generalText}>{team}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityCard: {
    width: 360,
    backgroundColor: WHITE,
    borderColor: GREY,
    borderWidth: 1,
    padding: 16,
    gap: 8,
    marginHorizontal: 14,
    marginBottom: 16,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0 - 0, height: 0 - 0},
  },
  activityText: {
    width: 296,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 16,
    // marginTop: 8,
  },
  generalText: {
    width: 296,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 16,
    // marginBottom: 8,
  },
  timeText: {
    width: 296,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 16,
    // marginTop: 16,
    color: Colors.BLUE,
  },
});

export default ActivityCard;
