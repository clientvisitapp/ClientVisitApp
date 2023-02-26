import React, {useEffect} from 'react';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import {CustomText as Text} from '../components/CustomText';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import ImageCarousel from '../components/ImageCarousel';
import HomeScreenCard from '../components/HomeScreenCard';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {getAgenda} from '../redux/slices/agendaSlice';
import {Image} from 'react-native';

type HomeScreenProps = {
  navigation: any;
};

const {BLUE, GREY, WHITE} = Colors;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {
    GREETER,
    TCS,
    LOCATIONS,
    AGENDA,
    PLACESTOVISIT,
    ROUTE_PLACESTOVISIT,
    ROUTE_AGENDA,
    ROUTE_CONTACT,
    CONTACTS,
  } = Strings;
  const {headerImage, header, text} = styles;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ScrollView style={{backgroundColor: WHITE, flex: 1}}>
      <Image
        style={headerImage}
        source={require('../assets/HomeScreenHeaderImage.png')}
      />
      <View style={header}>
        <Text style={text}>
          {GREETER}
          <Text style={{color: BLUE}}>{TCS}</Text> {LOCATIONS}
        </Text>
      </View>
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
      <HomeScreenCard
        title={CONTACTS}
        imageSource={{
          uri: 'https://coestaticcontent.blob.core.windows.net/visit/group-diverse-people-having-business-meeting.jpeg',
        }}
        onPress={() => navigation.navigate(ROUTE_CONTACT)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 195,
  },
  header: {
    marginLeft: 16,
    marginTop: 32,
    marginBottom: 12,
  },
  text: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 44,
  },
});

export default HomeScreen;
