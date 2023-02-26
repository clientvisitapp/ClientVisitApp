import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Platform,
} from 'react-native';

import CaretDownIcon from '../assets/icons/CaretDownIcon';
import CaretRightIcon from '../assets/icons/CaretRightIcon';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Colors from '../constants/Colors';
import {ActivityMock} from '../mocks/mockData';
import ActivityCard from './ActivityCard';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';

type AgendaProps = {
  item: {
    date: string;
  };
  index: number;
  clickedIndex: number;
  setClickedIndex: (value: number) => void;
};

const androidStyle = {
  elevation: 5,
};
const iosStyle = {
  shadowColor: '#171717',
  shadowOpacity: 0.2,
  shadowOffset: {width: 0 - 0, height: 0 - 0},
  shadowRadius: 3,
};

const AgendaScreenCard: React.FC<AgendaProps> = ({
  item,
  index,
  clickedIndex,
  setClickedIndex,
}) => {
  const {title, date} = item;
  const {btnPressText, btnNormalText, btnNormal, btnPress} = styles;

  const momentObject = moment(item.date, 'MM-DD-YYYY');
  const formattedDate = moment(momentObject).format('DD MMMM');
  return (
    <TouchableOpacity
      style={[
        index === clickedIndex ? btnPress : btnNormal,
        Platform.OS === 'android' ? androidStyle : iosStyle,
      ]}
      onPress={() => {
        setClickedIndex(index);
      }}>
      <Text style={index === clickedIndex ? btnPressText : btnNormalText}>
        {formattedDate}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnPressText: {
    width: 72,
    height: 20,
    color: Colors.WHITE,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },
  btnNormalText: {
    width: 72,
    height: 20,
    color: Colors.BLACK,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },
  btnNormal: {
    backgroundColor: Colors.LIGHTGREY,
    borderRadius: 12,
    height: 48,
    width: 100,
    marginTop: 16,
    marginHorizontal: 14,
    marginBottom: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPress: {
    backgroundColor: Colors.BLUE,
    borderRadius: 12,
    height: 48,
    width: 100,
    marginTop: 16,
    marginBottom: 21,
    marginHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AgendaScreenCard;
