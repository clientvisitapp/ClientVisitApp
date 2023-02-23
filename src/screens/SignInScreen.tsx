import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Strings from '../constants/Strings';
import {AppDispatch} from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateAuthData, signIn} from '../redux/slices/authSlice';

const SignInScreen = () => {
  const {loginContainer, errorText, inputStyle} = styles;
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
      {authError && <Text style={errorText}>{INVALID_CREDENTIALS}</Text>}
      <TextInput
        style={inputStyle}
        placeholder={NAME}
        value={formData[NAME].value}
        onChangeText={text =>
          setFormData(prev => {
            return {...prev, [NAME]: {...prev[NAME], value: text}};
          })
        }
      />
      <TextInput
        style={inputStyle}
        placeholder={PASSWORD}
        value={formData[PASSWORD].value}
        onChangeText={text =>
          setFormData(prev => {
            return {...prev, [PASSWORD]: {...prev[PASSWORD], value: text}};
          })
        }
        secureTextEntry={true}
      />
      <Button title="Login" onPress={onPressLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputStyle: {
    borderWidth: 1,
    marginBottom: 25,
  },
});

export default SignInScreen;
