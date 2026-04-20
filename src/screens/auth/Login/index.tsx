import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import AppText from '@src/components/AppText';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Normal text</Text>
      <Text style={styles.title}>abcdefgh</Text>
      <AppText variant="h1" weight='regular'>abcdefgh</AppText>

      <AppText variant="body" weight='semiBold'>This is your main text</AppText>

      <AppText variant="caption">Small helper text</AppText>
    </View>
  );
};

export default Login;
