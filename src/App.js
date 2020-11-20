/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './Navigation';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

const App: () => React$Node = () => {
  
  useEffect(() => {
      SplashScreen.hide();
  }, []);

  return (<Navigation />);
};

export default App;
