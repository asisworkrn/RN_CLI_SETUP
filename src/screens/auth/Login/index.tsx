import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import AppText from '@src/components/AppText';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Normal text</Text>
      <Text style={styles.title}>abcdefgh</Text>
      <AppText variant="h1" weight="regular">
        abcdefgh
      </AppText>

      <AppText variant="body" weight="semiBold">
        This is your main text
      </AppText>

      <AppText variant="caption">Small helper text</AppText>

      <View>
        <AppText variant="h1">{t('common.welcome')}</AppText>

        <AppText variant="body">{t('home.title')}</AppText>
      </View>
    </View>
  );
};

export default Login;
