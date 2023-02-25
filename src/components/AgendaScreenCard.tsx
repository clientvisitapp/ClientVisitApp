import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
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

type AgendaProps = {
  item: {
    title: string;
    date: string;
  };
  index: number;
  clickedIndex: number;
  setClickedIndex: (value: number) => void;
};

const AgendaScreenCard: React.FC<AgendaProps> = ({
  item,
  index,
  clickedIndex,
  setClickedIndex,
}) => {
  const {title} = item;
  const {btnPressText, btnNormalText, btnNormal, btnPress} = styles;

  // var [isPress, setIsPress] = useState(false);

  // var touchProps = {
  //   activeOpacity: 1,
  //   //underlayColor: 'blue',
  //   onPress: () => {
  //     // color change setIspressed(true)
  //     setIsPress(true);
  //     setClickedIndex(index);
  //   },
  // };
  // const date = new Date(item.date);
  // console.log(date.toLocaleString('default', {month: 'long'}));
  return (
    <>
      <View>
        <TouchableHighlight
          style={index === clickedIndex ? btnPress : btnNormal}
          onPress={() => {
            //setIsPress(!isPress);
            setClickedIndex(index);
          }}>
          <Text style={index === clickedIndex ? btnPressText : btnNormalText}>
            {title}
          </Text>
        </TouchableHighlight>
      </View>
    </>
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
