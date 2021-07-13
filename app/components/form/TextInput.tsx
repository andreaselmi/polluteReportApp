import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {colors} from '../../config/colors';

const AppTextInput: React.FC<TextInputProps> = ({...restProps}) => {
  return <TextInput style={styles.input} {...restProps} />;
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: colors.lightGrey,
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
