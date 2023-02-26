import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
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
  const {NAME, PASSWORD, SOMETHING_WENT_WRONG, PLACEHOLDER_NAME, ROUTE_HOME} =
    Strings;

  const dispatch = useDispatch<AppDispatch>();
  const {loader, auth} = useSelector(
    (state: {loader: {isLoading: boolean}; auth: {authError: null | string}}) =>
      state,
  );
  const {authError} = auth;
  const [formData, setFormData] = useState({
    [NAME]: {value: ''},
    [PASSWORD]: {value: ''},
  });
  const isValueEntered = formData[NAME].value && formData[PASSWORD].value;

  const onPressLogin = () => {
    formData[NAME].value &&
      formData[PASSWORD].value &&
      dispatch(
        signIn({
          username: formData[NAME]?.value,
          password: formData[PASSWORD]?.value,
        }),
      );
  };

  if (loader?.isLoading) {
    return (
      <ActivityIndicator
        color={BLUE}
        size="large"
        style={{flex: 1, justifyContent: 'center'}}
      />
    );
  }

  return (
    <View style={loginContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        style={{padding: 16, justifyContent: 'flex-end'}}>
        <Image source={require('../assets/LoginIcon.png')} style={iconStyle} />
        <Text style={loginHeader}>Sign In to Odyssey</Text>
        <TextInput
          style={[
            inputStyle,
            {fontWeight: formData[NAME].value.length === 0 ? '600' : 'normal'},
          ]}
          placeholder={PLACEHOLDER_NAME}
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
              marginBottom: 10,
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
        {authError && <Text style={errorText}>{SOMETHING_WENT_WRONG}</Text>}
        <TouchableOpacity
          style={buttonStyle}
          onPress={onPressLogin}
          disabled={!isValueEntered}>
          <Text style={buttonText}>Sign In</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    paddingLeft: 15,
    fontWeight: 'bold',
    marginBottom: 30,
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
    marginTop: 32,
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
    fontSize: 20,
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: 150,
    marginBottom: 25,
    height: 100,
    width: 100,
  },
});

export default SignInScreen;
