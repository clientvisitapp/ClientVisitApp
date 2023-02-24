import React from 'react';
import {CustomText as Text} from '../components/CustomText';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageCarousel from '../components/ImageCarousel';
import HomeScreenCard from '../components/HomeScreenCard';

type HomeScreenProps = {
  navigation: any;
};

const {BLUE, GREY, WHITE} = Colors;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {
    GREETER,
    BESTBUY,
    CTDC,
    AGENDA,
    PLACESTOVISIT,
    ROUTE_PLACESTOVISIT,
    ROUTE_AGENDA,
  } = Strings;
  const {header, text} = styles;

  return (
    <ScrollView>
      <View style={{backgroundColor: GREY}}>
        <View style={header}>
          <Text style={text}>
            {GREETER}
            <Text style={{color: BLUE}}>{BESTBUY} </Text>
            {CTDC}
          </Text>
        </View>
        <ImageCarousel />
        <HomeScreenCard
          title={AGENDA}
          imageSource={{
            uri: 'https://coestaticcontent.blob.core.windows.net/visit/group-diverse-people-having-business-meeting.jpeg',
          }}
          onPress={() => navigation.navigate(ROUTE_AGENDA)}
        />
        <HomeScreenCard
          title={PLACESTOVISIT}
          imageSource={{
            uri: 'https://coestaticcontent.blob.core.windows.net/visit/chennai.jpg',
          }}
          onPress={() => navigation.navigate(ROUTE_PLACESTOVISIT)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 72,
    backgroundColor: WHITE,
    padding: 16,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 9.5,
  },
});

export default HomeScreen;
