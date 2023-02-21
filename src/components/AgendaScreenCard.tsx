import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomText as Text} from './CustomText';
import DownArrowIcon from '../assets/icons/DownArrowIcon';
import RightArrowIcon from '../assets/icons/RightArrowIcon';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Colors from '../constants/Colors';
import {ActivityMock} from '../mocks/mockData';
import ActivityCard from './ActivityCard';

type AgendaProps = {
  title: string;
};

const AgendaScreenCard: React.FC<AgendaProps> = ({title}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const {headingText, collapseTitle, arrowIconImage} = styles;

  return (
    <Collapse
      isExpanded={isExpanded}
      onToggle={(value: boolean) => setIsExpanded(value)}>
      <CollapseHeader>
        <View style={collapseTitle}>
          <Text style={headingText}>{title}</Text>
          {isExpanded ? (
            <DownArrowIcon style={arrowIconImage} />
          ) : (
            <RightArrowIcon style={arrowIconImage} />
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
