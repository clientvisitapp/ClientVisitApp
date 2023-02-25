import React from 'react';
import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Colors from '../constants/Colors';

import {CustomText as Text} from './CustomText';

type PlacesToVisitScreenCardProps = {
  imageSource: any;
  siteSource: any;
  attraction: string;
};

const PlacesToVisitScreenCard: React.FC<PlacesToVisitScreenCardProps> = ({
  imageSource,
  siteSource,
  attraction,
}) => {
  const {headingStyle, text, cardView} = styles;
  const handleOpenWithLinking = () => {
    Linking.openURL(siteSource);
  };

  return (
    <TouchableOpacity onPress={handleOpenWithLinking}>
      <Image
        source={{uri: imageSource}}
        style={cardView}
        defaultSource={require('../assets/PlacesPlaceholder.png')}
      />
      <Text style={text}>{attraction}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    height: 70,
    padding: 16,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    backgroundColor: Colors.WHITE,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 50,
    marginLeft: 16,
  },
  cardView: {
    height: 171,
    borderRadius: 4,
    marginVertical: 14,
    marginHorizontal: 16,
  },
});

export default PlacesToVisitScreenCard;
