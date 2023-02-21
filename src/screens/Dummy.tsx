import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {sample1, sampleAsync} from '../redux/slices/sampleSlice';
import {AppDispatch} from '../redux/store';

const Dummy = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sampleSize = useSelector((state: {sample: object}) => state.sample);

  useEffect(() => {
    dispatch(sample1(4));
    dispatch(sampleAsync({onSuccess, onFailure}));

    console.log(sampleSize);
  });

  const onSuccess = () => {
    console.log('success cb');
  };

  const onFailure = () => {
    console.log('failure cb');
  };

  return <Text>Hi</Text>;
};

export default Dummy;
