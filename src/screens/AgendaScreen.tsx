import React from 'react';

import AgendaIcon from '../assets/icons/AgendaIcon';
import {CustomText as Text} from '../components/CustomText';
import {ScrollView, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import {AgendaMock} from '../mocks/mockData';
import AgendaScreenCard from '../components/AgendaScreenCard';

const AgendaScreen: React.FC = () => {
  const {header, text, iconStyle} = styles;
  const {AGENDA} = Strings;

  return (
    <>
      <View style={header}>
        <AgendaIcon style={iconStyle} />
        <Text style={text}>{AGENDA}</Text>
      </View>
      <ScrollView>
        {AgendaMock.map((item, index) => {
          const currentDate = new Date();
          let shouldExpand = false;
          currentDate.getDate() === Number(item.date.substring(0, 2)) &&
            (shouldExpand = true);
          return (
            <AgendaScreenCard
              key={index}
              item={item}
              shouldExpand={shouldExpand}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    width: 390,
    backgroundColor: Colors.WHITE,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 9.5,
  },
  iconStyle: {
    marginLeft: 15,
  },
});

export default AgendaScreen;
