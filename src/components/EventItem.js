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
  ActivityIndicator,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styles, { appBackgroundWhite, appBlack, appBlackLight, appMainColor, appRed, appWhite } from './Styles';
import Global, { apiRequest, sortApiDate, convertApiTimeToAMPM, monthNames } from './Global';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const initialLayout = { width: Dimensions.get('window').width };


const EventItem: () => React$Node = ({e, i, type, saveEvents, screenType, removeEvents}) => {
    return(
        <View key={i} style={[Styles.jListingRow, (i == 0) ? {marginTop: 16} : {}]}>
            <View style={Styles.jListingLeft}>
                <Text style={Styles.jListingDate}>{e.event_start_date.split('-')[2]}</Text>
                <Text style={Styles.jListingMonth}>{monthNames[e.event_start_date.split('-')[1]]}</Text>
            </View>
            <View style={Styles.jListingCenter}>
                <View style={Styles.jListingCenterTop}>
                <Text style={Styles.jListingCity}>SALAT JANAZA - {e.location_city}</Text>
                <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                    <EntypoIcon name="address" size={14} />
                    <Text style={{marginLeft: 3}}>{Global.limitString(e.location_address1, 25)}</Text>
                </View>
                {
                    e.meta && e.meta.prayer &&
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <FontAwesome5Icon name="pray" size={14} />
                        <Text style={{marginLeft: 7}}>{e.meta.prayer}</Text>
                    </View>
                }
                {
                    e.meta && e.meta.gender &&
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <IoniconsIcon name="person" size={14} />
                        <Text style={{marginLeft: 3}}>{e.meta.gender}</Text>
                    </View>
                }
                </View>
                <View style={Styles.jListingCenterBottom}>
                {
                    e.event_start_time &&
                    <Text style={Styles.textTiny}>{convertApiTimeToAMPM(e.event_start_time)}</Text>
                }
                {
                    e.event_start_date &&
                    <Text style={Styles.textTiny}>{sortApiDate(e.event_start_date)}</Text>
                }
                </View>
            </View>
            {
                type &&
                <TouchableWithoutFeedback onPress={async () => { await saveEvents(e.event_id, type)}}>
                    <View style={Styles.jListingRight}>
                    <AntDesignIcon name="heart" size={16} color={e.saved ? appRed : appBlack} />
                    <Text style={[Styles.jListingRightSaveText, e.saved ? Styles.jListingRightSaveColor : {}]}>
                        {e.saved ? 'SAVED' : 'SAVE'}
                    </Text>
                    </View>
                </TouchableWithoutFeedback>
            }
            {
                screenType === 'saved' &&
                <TouchableWithoutFeedback onPress={async () => { await removeEvents(e.event_id)}}>
                    <View style={Styles.jListingRight}>
                    <AntDesignIcon name="close" size={20} color={e.saved ? appRed : appBlack} />
                    <Text style={[Styles.jListingRightSaveText, e.saved ? Styles.jListingRightSaveColor : {}]}>
                        REMOVE
                    </Text>
                    </View>
                </TouchableWithoutFeedback>
            }
        </View>
    )
}


export default EventItem;