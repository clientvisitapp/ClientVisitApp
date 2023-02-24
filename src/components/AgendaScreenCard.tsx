import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomText as Text} from './CustomText';
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
  item: {title: string; date: string};
  shouldExpand: boolean;
};

const AgendaScreenCard: React.FC<AgendaProps> = ({item, shouldExpand}) => {
  const {title} = item;
  const {headingText, collapseTitle, arrowIconImage} = styles;

  const [isExpanded, setIsExpanded] = useState(shouldExpand);

  return (
    <Collapse
      isExpanded={isExpanded}
      onToggle={(value: boolean) => setIsExpanded(value)}>
      <CollapseHeader>
        <View style={collapseTitle}>
          <Text style={headingText}>{title}</Text>
          {isExpanded ? (
            <CaretDownIcon style={arrowIconImage} />
          ) : (
            <CaretRightIcon style={arrowIconImage} />
          )}
        </View>
      </CollapseHeader>
      <CollapseBody>
        {ActivityMock.map((mock, index) => {
          return (
            <ActivityCard
              key={index}
              header={mock.header}
              location={mock.location}
              date={mock.date}
              time={mock.time}
            />
          );
        })}
      </CollapseBody>
    </Collapse>
  );
};

const styles = StyleSheet.create({
  headingText: {
    height: 18,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 12,
    marginVertical: 15,
  },
  collapseTitle: {
    width: 357,
    height: 48,
    backgroundColor: Colors.LIGHTBLUE,
    marginHorizontal: 16,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 17,
  },
  arrowIconImage: {
    width: 20,
    height: 20,
    marginVertical: 12,
    marginLeft: 270,
  },
});

export default AgendaScreenCard;
