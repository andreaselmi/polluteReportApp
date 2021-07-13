import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StatusBar from './app/components/StatusBar';
import LoginPage from './app/screens/LoginPage';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <LoginPage />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
