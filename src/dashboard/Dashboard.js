import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styles from './../components/Styles';
import { applyLetterSpacing } from './../components/Global';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import TabNavigator from './TabNavigator';


const Dashboard: () => React$Node = ({ navigation }) => {
  return (<TabNavigator />);
};

export default Dashboard;
