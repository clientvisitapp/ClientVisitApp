import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';

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

const androidStyle = {
  elevation: 5,
};
const iosStyle = {
  // shadowColor: '#171717',
  // shadowOpacity: 0.2,
  // shadowOffset: {width: 0 - 0, height: 0 - 0},
  // shadowRadius: 3,
};

const ActivityCard: React.FC<ActivityProps> = ({
  header,
  description,
  location,
  time,
  team,
}) => {
  const {activityCard, activityText, generalText, timeText} = styles;

  return (
    <View
      style={[
        activityCard,
        Platform.OS === 'android' ? androidStyle : iosStyle,
      ]}>
      {header ? <Text style={activityText}>{header}</Text> : null}
      {time ? <Text style={timeText}>{time}</Text> : null}
      {description ? <Text style={generalText}>{description}</Text> : null}
      {location ? <Text style={generalText}>{location}</Text> : null}
      {team ? <Text style={generalText}>{team}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  activityCard: {
    backgroundColor: WHITE,
    borderColor: GREY,
    borderWidth: 1,
    padding: 16,
    paddingHorizontal: 10,
    gap: 8,
    // marginHorizontal: 14,
    marginBottom: 8,
  },
  activityText: {
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 16,
    // marginTop: 8,
  },
  generalText: {
    fontWeight: '400',
    fontSize: 14,
    marginLeft: 16,
    // marginBottom: 8,
  },
  timeText: {
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 16,
    // marginTop: 16,
    color: Colors.BLUE,
  },
});

export default ActivityCard;
