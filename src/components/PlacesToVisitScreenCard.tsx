import React from 'react';
import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
  Dimensions,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';

import {CustomText as Text} from './CustomText';
const width = Dimensions.get('window').width;

const androidStyle = {
  elevation: 5,
};
const iosStyle = {
  shadowColor: '#171717',
  shadowOpacity: 0.2,
  shadowOffset: {width: 4, height: 0},
  shadowRadius: 3,
};

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
      <View
        style={[listCard, Platform.OS === 'android' ? androidStyle : iosStyle]}>
        <Image
          source={{uri: imageSource}}
          style={cardView}
          defaultSource={require('../assets/PlacesPlaceholder.png')}
        />
      </View>
      <Text style={text}>{attraction}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listCard: {
    height: 190,
    width: (width - 16) / 2,
    paddingVertical: 8,
    paddingLeft: 16,
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 16,
    marginBottom: 8,
  },
  cardView: {
    height: 170,
    marginBottom: 8,
  },
});

export default PlacesToVisitScreenCard;
