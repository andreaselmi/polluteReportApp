import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle, View} from 'react-native';

interface ErrorTextProps extends TextProps {
  text: string;
  textStyle?: TextStyle;
}

const ErrorText = ({text, textStyle, ...restProps}: ErrorTextProps) => {
  return (
    <Text style={[textStyle, styles.text]} {...restProps}>
      {text}
    </Text>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
