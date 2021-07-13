import React from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface ScreenProps {
  style?: StyleProp<ViewStyle>;
}

const Screen: React.FC<ScreenProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
