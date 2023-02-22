import React from 'react';
// import SplashLogo from '../assets/icons/SplashLogo';
import {Image, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../assets/SplashLogo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
});

export default SplashScreen;
