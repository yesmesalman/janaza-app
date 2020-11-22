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

    const removeEvents = async (event_id) => {
        
        let index = events.findIndex(e => e.event_id === event_id)
        let newArr = [...events]
        newArr[index].saved = false
        setEvents(newArr)

        await Global.toggleSaveEvents(event_id)

        let gIndex = Global.franceEvents.findIndex(e => e.event_id === event_id)
        if(gIndex === -1){
            gIndex = Global.provinceEvents.findIndex(e => e.event_id === event_id)
            let gnewArr = [...Global.provinceEvents]
            gnewArr[gIndex].saved = false
            Global.provinceEvents = gnewArr
            await Global.saveEventsInStorage()
        }else{
            let gnewArr = [...Global.franceEvents]
            gnewArr[gIndex].saved = false
            Global.franceEvents = gnewArr
            await Global.saveEventsInStorage()
        }
    }

    return (
        <>
            <View style={[Styles.container]}>
                <Toolbar title={'Saved Events'} />

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
                            return( <EventItem e={e} i={i} removeEvents={removeEvents} key={i} screenType={'saved'} /> )
                        })
                    }
                </ScrollView>
            </View>
        </>
    );
};

export default SavedEvents;
