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
  ActivityIndicator,
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
import Global, {applyLetterSpacing} from './../../components/Global';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import EventItem from './../../components/EventItem'
import Toolbar from './../../components/Toolbar'

const SavedEvents: () => React$Node = ({navigation}) => {

    const [events, setEvents] = React.useState([])

    const getSavedEvents = () => {
        setEvents([...Global.franceEvents, ...Global.provinceEvents])
    }

    const unsubscribe = navigation.addListener('focus', () => {
        getSavedEvents()
    });

    return (
        <>
            <View style={[Styles.container]}>
                <Toolbar title={'Saved events'} />

                <ScrollView style={[Styles.container]}>
                    {
                        events.filter(word => word.saved == true).length < 1 && 
                        <View style={[Styles.containerContentCenterForLoading]}>
                            <Text style={Styles.recordsNotFoundText}>Records not found</Text>
                        </View>
                    }
                    {
                        events.map((e, i) => {
                            if(e.saved == false) return;
                            return( <EventItem e={e} i={i} saveEvents={() => {}} key={i} /> )
                        })
                    }
                </ScrollView>
            </View>
        </>
    );
};

export default SavedEvents;
