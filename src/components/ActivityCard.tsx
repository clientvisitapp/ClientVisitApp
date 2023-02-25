import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomText as Text} from './CustomText';
import Colors from '../constants/Colors';

type ActivityProps = {
  header: string;
  description: string;
  location: string;
  time: string;
};

const {WHITE, GREY} = Colors;

const ActivityCard: React.FC<ActivityProps> = ({
  header,
  description,
  location,
  time,
}) => {
  const {activityCard, activityText, descriptionText, locationText, timeText} =
    styles;

  return (
    <View style={activityCard}>
      <Text style={activityText}>{header}</Text>
      <Text style={descriptionText}>{description}</Text>
      <Text style={locationText}>{location}</Text>
      <Text style={timeText}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityCard: {
    width: 350,
    backgroundColor: WHITE,
    borderColor: GREY,
    borderWidth: 1,
    marginHorizontal: 14,
    marginBottom: 16,
    shadowOpacity: 0.2,
    shadowOffset: {width: 3, height: 3},
  },
  activityText: {
    width: 296,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 16,
    marginTop: 16,
  },
  descriptionText: {
    width: 296,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  locationText: {
    width: 296,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  timeText: {
    width: 296,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 16,
    marginBottom: 16,
    color: Colors.BLUE,
  },
});

export default ActivityCard;
