import React, {useState} from 'react';

import AgendaIcon from '../assets/icons/AgendaIcon';
import {CustomText as Text} from '../components/CustomText';
import {ScrollView, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import {ActivityMock, AgendaMock} from '../mocks/mockData';
import AgendaScreenCard from '../components/AgendaScreenCard';
import ActivityCard from '../components/ActivityCard';

const AgendaScreen: React.FC = () => {
  const {text, iconStyle} = styles;
  const {AGENDA} = Strings;
  const [clickedIndex, setClickedIndex] = useState(0);

  return (
    <View style={{backgroundColor: Colors.WHITE, flex: 1}}>
      <ScrollView
        style={{flexDirection: 'row'}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {AgendaMock.map((item, index) => {
          return (
            <AgendaScreenCard
              key={index}
              item={item}
              index={index}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          );
        })}
      </ScrollView>
      <ScrollView>
        {ActivityMock[clickedIndex].map((mock, index) => {
          return (
            <ActivityCard
              key={index}
              header={mock.header}
              description={mock.description}
              location={mock.location}
              time={mock.time}
              team={mock.team}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
