import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styles from './../../components/Styles';
import {applyLetterSpacing} from './../../components/Global';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';


const Explore: () => React$Node = ({navigation}) => {
  return (
    <>
      <View style={[Styles.container, Styles.appScreen]}>
        <Text style={Styles.screenTitle}>Explore</Text>
      </View>
    </>
  );
};

export default Explore;
