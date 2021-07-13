import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import StatusBar from './app/components/StatusBar';
import LoginPage from './app/screens/LoginPage';

const App = () => {
  return (
    <>
      <StatusBar />
      <LoginPage />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
