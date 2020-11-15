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

import Styles from './../../components/Styles';
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
            <Text style={Styles.screenTitle}>Explore</Text>
            
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
            <View style={Styles.containerContentCenter}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        </View>
    </>
  );
};

export default Profile;
