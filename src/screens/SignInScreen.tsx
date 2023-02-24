import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {CustomText as Text} from '../components/CustomText';
import {useDispatch, useSelector} from 'react-redux';
import Strings from '../constants/Strings';
import {AppDispatch} from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  updateAuthData,
  signIn,
  clearAuthError,
} from '../redux/slices/authSlice';
import Colors from '../constants/Colors';

const {BLACK, BLUE} = Colors;

const SignInScreen = () => {
  const {
    loginContainer,
    errorText,
    inputStyle,
    buttonStyle,
    buttonText,
    loginHeader,
    iconStyle,
  } = styles;
  const {NAME, PASSWORD, INVALID_CREDENTIALS} = Strings;

  const dispatch = useDispatch<AppDispatch>();
  const {authError} = useSelector(
    (state: {auth: {authError: null | string}}) => state.auth,
  );
  const [formData, setFormData] = useState({
    [NAME]: {value: ''},
    [PASSWORD]: {value: ''},
  });
  const [isLoading, setIsLoading] = useState(true);
  const isValueEntered = formData[NAME].value && formData[PASSWORD].value;

  useEffect(() => {
    checkLocalStorage();
  }, []);

  const checkLocalStorage = async () => {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        dispatch(updateAuthData(JSON.parse(authDataSerialized)));
      }
    } catch (error) {
      console.log('from local storage', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onPressLogin = () => {
    formData[NAME].value && formData[PASSWORD].value && dispatch(signIn());
  };

  if (isLoading) {
    return null;
  }

  return (
    <View style={loginContainer}>
      <Image
        source={{
          uri: 'https://coestaticcontent.blob.core.windows.net/visit/Group 4.png',
        }}
        style={iconStyle}
      />
      <Text style={loginHeader}>Sign In to Odyssey</Text>
      <TextInput
        style={[
          inputStyle,
          {fontWeight: formData[NAME].value.length === 0 ? '600' : 'normal'},
        ]}
        placeholder={NAME}
        placeholderTextColor={BLACK}
        value={formData[NAME].value}
        onChangeText={text => {
          dispatch(clearAuthError());
          setFormData(prev => {
            return {...prev, [NAME]: {...prev[NAME], value: text}};
          });
        }}
        onFocus={() => dispatch(clearAuthError())}
      />
      <TextInput
        style={[
          inputStyle,
          {
            fontWeight:
              formData[PASSWORD].value.length === 0 ? '600' : 'normal',
          },
        ]}
        placeholder={PASSWORD}
        placeholderTextColor={BLACK}
        value={formData[PASSWORD].value}
        onChangeText={text => {
          dispatch(clearAuthError());
          setFormData(prev => {
            return {...prev, [PASSWORD]: {...prev[PASSWORD], value: text}};
          });
        }}
        secureTextEntry={true}
        onFocus={() => dispatch(clearAuthError())}
      />
      {authError && <Text style={errorText}>{INVALID_CREDENTIALS}</Text>}
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPressLogin}
        disabled={!isValueEntered}>
        <Text style={buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputStyle: {
    height: 50,
    marginHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 25,
    paddingLeft: 15,
  },
  buttonStyle: {
    backgroundColor: BLUE,
    height: 50,
    marginHorizontal: 15,
    marginTop: 3,
    borderWidth: 0.5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginHeader: {
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: 170,
    marginBottom: 25,
    height: 100,
    width: 100,
  },
});

export default SignInScreen;
