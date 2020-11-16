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

import Styles, {appBlackLight} from './../../components/Styles';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import {applyLetterSpacing} from './../../components/Global';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import DummyImage from './../../assets/dummy.png'

const Profile: () => React$Node = ({navigation}) => {
  return (
    <>
        <View style={[Styles.container, Styles.appScreen]}>
            <Text style={Styles.screenTitle}>Profile</Text>
            
            <View style={Styles.profileContainer}>
                <View style={Styles.profileBox}>
                    <Image
                        source={DummyImage}
                        style={Styles.profileBoxImage}
                    />
                </View>
                <View style={Styles.profileContainerRight}>
                    <Text style={Styles.profileName}>John Doe</Text>
                    <Text style={Styles.profileBio}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </View>
            </View>

            <View style={Styles.profileRow}>
              <FontistoIcon name="person" size={15} color={appBlackLight} />
              <Text style={{marginLeft: 10}}> John Doe</Text>
            </View>
            <View style={Styles.profileRow}>
              <EntypoIcon name="email" size={15} color={appBlackLight} />
              <Text style={{marginLeft: 10}}> johndoe@gmail.com </Text>
            </View>
            <View style={Styles.profileRow}>
              <EntypoIcon name="home" size={15} color={appBlackLight} />
              <Text style={{marginLeft: 10}}> Paris, France </Text>
            </View>
            <View style={Styles.profileRow}>
              <EntypoIcon name="key" size={15} color={appBlackLight} />
              <Text style={{marginLeft: 10}}> ****** </Text>
            </View>
            <View style={Styles.profileRow}>
              <MaterialIconsIcon name="details" size={20} color={appBlackLight} />
              <Text style={{marginLeft: 10}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
            </View>
        </View>
    </>
  );
};

export default Profile;
