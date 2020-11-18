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

        <ScrollView style={Styles.appScreenScrollView}>
          <View style={Styles.settingsRow}>
            <Text style={Styles.settingsName}>Profile Name</Text>
            <Text><EntypoIcon name="chevron-right" size={30} color={appMainColorLight} /></Text>
          </View>
          <View style={Styles.settingsRow}>
            <Text style={Styles.settingsName}>Profile Bio</Text>
            <Text><EntypoIcon name="chevron-right" size={30} color={appMainColorLight} /></Text>
          </View>
          <View style={Styles.settingsRow}>
            <Text style={Styles.settingsName}>Change My Location</Text>
            <Text><EntypoIcon name="chevron-right" size={30} color={appMainColorLight} /></Text>
          </View>
          <View style={Styles.settingsRow}>
            <Text style={Styles.settingsName}>Change Password</Text>
            <Text><EntypoIcon name="chevron-right" size={30} color={appMainColorLight} /></Text>
          </View>
          <TouchableOpacity style={Styles.settingsRow} onPress={() => { navigation.navigate('Login') }}>
            <Text style={Styles.settingsName}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Settings;
