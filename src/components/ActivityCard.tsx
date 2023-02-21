import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomText as Text} from './CustomText';
import Colors from '../constants/Colors';

type ActivityProps = {
  header: string;
  location: string;
  date: string;
  time: string;
};

const {WHITE, GREY} = Colors;

const ActivityCard: React.FC<ActivityProps> = ({
  header,
  location,
  date,
  time,
}) => {
  const {
    activityCard,
    activityText,
    locationText,
    dateText,
    timeText,
    dateTimeCard,
  } = styles;

  return (
    <View style={activityCard}>
      <Text style={activityText}>{header}</Text>
      <Text style={locationText}>{location}</Text>
      <View style={dateTimeCard}>
        <Text style={dateText}>{date}</Text>
        <Text style={timeText}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activityCard: {
    height: 122,
    backgroundColor: WHITE,
    borderColor: GREY,
    borderWidth: 1,
  },
  activityText: {
    height: 20,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 16,
    marginTop: 16,
  },
  locationText: {
    width: 328,
    height: 18,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  dateText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  timeText: {
    position: 'absolute',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    right: 65,
  },
  dateTimeCard: {
    flexDirection: 'row',
    width: 296,
    height: 18,
    marginLeft: 16,
    marginBottom: 16,
  },
});

export default ActivityCard;
