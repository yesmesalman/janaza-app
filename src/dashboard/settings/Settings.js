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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styles, {appMainColorLight} from './../../components/Styles';
import {applyLetterSpacing} from './../../components/Global';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Settings: () => React$Node = ({navigation}) => {
  return (
    <>
      <View style={[Styles.container, Styles.appScreen]}>
        <Text style={Styles.screenTitle}>Settings</Text>
      </View>
    </>
  );
};

export default Settings;
