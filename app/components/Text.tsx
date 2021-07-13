import React from 'react';
import {Text, StyleSheet, Platform, TextStyle} from 'react-native';

interface AppTextProps {
  style?: TextStyle;
  numberOfLines?: number;
}

const AppText: React.FC<AppTextProps> = ({children, style, numberOfLines}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppText;
