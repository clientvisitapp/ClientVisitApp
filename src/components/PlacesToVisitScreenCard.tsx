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
  const {listCard, text, cardView} = styles;
  const handleOpenWithLinking = () => {
    Linking.openURL(siteSource);
  };

  return (
    <TouchableOpacity onPress={handleOpenWithLinking}>
      <View style={listCard}>
        <Image
          source={{uri: imageSource}}
          style={cardView}
          defaultSource={require('../assets/PlacesPlaceholder.png')}
        />
        <Text style={text}>{attraction}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listCard: {
    height: 200,
    width: 190,
    padding: 16,
    marginBottom: 16,
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  cardView: {
    height: 170,
    marginBottom: 8,
  },
});

export default PlacesToVisitScreenCard;
