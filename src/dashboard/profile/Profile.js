import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styles, {appMainColorLight} from './../../components/Styles';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import {applyLetterSpacing} from './../../components/Global';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const Profile: () => React$Node = ({navigation}) => {
  return (
    <>
      <View style={[Styles.container, Styles.appScreen]}>
        <Text style={Styles.screenTitle}>Profile</Text>
      </View>
    </>
  );
};

export default Profile;
