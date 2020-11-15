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

const Register: () => React$Node = ({ navigation }) => {
  const [name, onChangeName] = React.useState('admin');
  const [email, onChangeEmail] = React.useState('admin@admin.com');
  const [password, onChangePassword] = React.useState('admin@123');
  const [cpassword, onChangeCPassword] = React.useState('admin@123');

  const onPressLogin = () => {
    navigation.navigate('Login')
  }

  const onPressRegister = () => {
    navigation.navigate('Login')
  }


  return (
    <>
      <View style={Styles.containerContentCenter}>
        <Text style={Styles.appLogo}>{applyLetterSpacing('JANAZA.FR', 3)}</Text>
        <TextInput style={Styles.textField} onChangeText={e => onChangeName(e)} value={name} placeholder={'Email'} />
        <TextInput style={Styles.textField} onChangeText={e => onChangeEmail(e)} value={email} placeholder={'Email'} />
        <TextInput style={[Styles.textField]} secureTextEntry={true} onChangeText={e => onChangePassword(e)} value={password} placeholder={'Password'} />
        <TextInput style={[Styles.textField, {marginBottom: 50}]} secureTextEntry={true} onChangeText={e => onChangeCPassword(e)} value={cpassword} placeholder={'Password'} />
        <TouchableOpacity style={[Styles.btnFullRound, {marginBottom: 10} ]} onPress={onPressRegister}>
          <Text style={Styles.textWhite}>Register</Text>
        </TouchableOpacity>
        <TouchableHighlight style={[Styles.btnFullRound, {marginBottom: 10} ]} onPress={onPressLogin}>
          <Text style={Styles.textWhite}>Already have an account?</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Register;
