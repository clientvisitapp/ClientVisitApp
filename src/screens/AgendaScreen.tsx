import React, {useEffect, useState} from 'react';

import AgendaIcon from '../assets/icons/AgendaIcon';
import {CustomText as Text} from '../components/CustomText';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import {ActivityMock, AgendaMock} from '../mocks/mockData';
import AgendaScreenCard from '../components/AgendaScreenCard';
import ActivityCard from '../components/ActivityCard';
import {useDispatch, useSelector} from 'react-redux';
import {agendaType} from '../types';
import {getAgenda} from '../redux/slices/agendaSlice';
import {AppDispatch} from '../redux/store';

const AgendaScreen: React.FC = () => {
  const {text, iconStyle} = styles;
  const {AGENDA} = Strings;
  const dispatch = useDispatch<AppDispatch>();

  const {
    agenda: {agendas},
    loader: {isLoading},
  } = useSelector(
    (state: {agenda: {agendas: agendaType}; loader: {isLoading: boolean}}) =>
      state,
  );
  const [clickedIndex, setClickedIndex] = useState(0);
  const currentDate = new Date().getDate();

  useEffect(() => {
    dispatch(getAgenda());
  }, []);

  useEffect(() => {
    agendas?.forEach((item, index) => {
      item?.date?.substring(3, 5) === currentDate && setClickedIndex(index);
    });
  }, [agendas]);

  if (isLoading) {
    return (
      <ActivityIndicator
        color={Colors.BLUE}
        size="large"
        style={{flex: 1, justifyContent: 'center'}}
      />
    );
  }

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        flex: 1,
      }}>
      <ScrollView
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          backgroundColor: Colors.WHITE,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {agendas?.map((item, index) => {
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
      <ScrollView
        style={{
          backgroundColor: Colors.WHITE,
          paddingVertical: 4,
        }}
        contentContainerStyle={{backgroundColor: Colors.LIGHTGREY}}>
        {agendas[clickedIndex]?.agendaDetails?.map((item, index) => {
          return (
            <ActivityCard
              key={index}
              header={item.title}
              description={item.description}
              location={item.location}
              time={item.time}
              team={item.team}
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
