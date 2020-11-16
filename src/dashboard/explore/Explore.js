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
import DummyImage from './../../assets/dummy1.png'


const Explore: () => React$Node = ({navigation}) => {
  return (
    <>
      <View style={[Styles.container, Styles.appScreen]}>
        <Text style={Styles.screenTitle}>Explore</Text>

        <ScrollView style={Styles.appScreenScrollView}>
          {
            [...Array(10)].map((e, i) => {
              return(
                <View style={Styles.exploreRow} key={i}>
                  <View style={Styles.exploreRowLeft}>
                    <Image
                      source={DummyImage}
                      style={Styles.exploreRowLeftImage}
                    />
                  </View>
                  <View style={Styles.exploreRowRight}>
                    <Text style={Styles.exploreRowName}>John Doe</Text>
                    <Text style={Styles.exploreRowTime}>10:00 PM</Text>
                    <Text style={Styles.exploreRowAddress}>Rennes, 	Brittany</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </>
  );
};

export default Explore;
