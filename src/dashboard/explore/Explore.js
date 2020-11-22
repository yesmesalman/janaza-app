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
import Toolbar from './../../components/Toolbar'
import Styles, { appBackgroundWhite, appBlack, appBlackLight, appMainColor, appRed, appWhite, appWhiteLight } from './../../components/Styles';
import Global, { apiRequest, sortApiDate, convertApiTimeToAMPM, monthNames } from './../../components/Global';
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
import EventItem from './../../components/EventItem';

const initialLayout = { width: Dimensions.get('window').width };

const Explore: () => React$Node = ({navigation}) => {

  const CATEGORY_ID = {
    france: 1,
    province: 2
  }

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'france', title: 'ille-de-france' },
    { key: 'province', title: 'Province' },
  ]);

  const [franceData, setFranceData] = React.useState([]);
  const [franceLoading, setFranceLoading] = React.useState(false);
  const [provinceData, setProvinceData] = React.useState([]);
  const [provinceLoading, setProvinceLoading] = React.useState(false);

  const fetchData = async (category_id, callback, loadingCallback) => {
    try {
      loadingCallback(true)

      let res = await apiRequest(`all-janaza?event_category_id=${category_id}&page=1`, {})
      res = await res.json()
      res.data.map((e) => {
        e.saved = Global.savedEvents.indexOf(e.event_id) !== -1 ? true : false
      })
      callback(res.data)
      loadingCallback(false)

      //save events in local storage
      if(category_id === CATEGORY_ID.france){
        Global.franceEvents = res.data
      }else{
        Global.provinceEvents = res.data
      }
      await Global.saveEventsInStorage();

    }
    catch(err) {
      loadingCallback(false)

      //get events in local storage
      if(category_id === CATEGORY_ID.france){
        callback(Global.franceEvents)
      }else{
        callback(Global.provinceEvents)
      }

      console.log(err)
    }
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData(CATEGORY_ID.france, setFranceData, setFranceLoading)
    });

    return unsubscribe;
  }, [navigation]);

  const saveEvents = async (event_id, type) => {
    let res = await Global.toggleSaveEvents(event_id)
    if(type === 'france'){
      let index = franceData.findIndex(e => e.event_id === event_id)
      let newArr = [...franceData]
      newArr[index].saved = res
      setFranceData(newArr)
      Global.franceEvents = newArr
      await Global.saveEventsInStorage();
    }
    else{
      let index = provinceData.findIndex(e => e.event_id === event_id)
      let newArr = [...provinceData]
      newArr[index].saved = res
      setProvinceData(newArr)
      Global.provinceEvents = newArr
      await Global.saveEventsInStorage();
    }
  }

  const France = () => (
    <View style={[Styles.container]}>
      <ScrollView style={Styles.container}>
        {
          (franceLoading === true) &&
          <View style={[Styles.containerContentCenterForLoading]}>
            <ActivityIndicator size="large" color={appMainColor} />
          </View>
        }
        {
          franceLoading === false &&
          <>
            {
              (franceData.length < 1) &&
              <View style={[Styles.containerContentCenterForLoading]}>
                <Text style={Styles.recordsNotFoundText}>Records not found</Text>
              </View>
            }
            
            {
              franceData.map((e, i) => {
                return( <EventItem e={e} i={i} saveEvents={saveEvents} type='france' key={i} /> )
              })
            }
          </>
        }
      </ScrollView>
    </View>
  );
   
  const Province = () => (
    <View style={[Styles.container]}>
      <ScrollView style={[Styles.container]}>
        {
          (provinceLoading === true) &&
          <View style={[Styles.containerContentCenterForLoading]}>
            <ActivityIndicator size="large" color={appMainColor} />
          </View>
        }
        {
          provinceLoading === false &&
          <>
            {
              provinceData.length < 1 && 
              <View style={[Styles.containerContentCenterForLoading]}>
                <Text style={Styles.recordsNotFoundText}>Records not found</Text>
              </View>
            }
            {
              provinceData.map((e, i) => {
                return( <EventItem e={e} i={i} saveEvents={saveEvents} type='province' key={i} /> )
              })
            }
          </>
        }
      </ScrollView>
    </View>
  );

  const renderScene = SceneMap({
    france: France,
    province: Province,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderIcon={({ route, focused, color }) => {
        if(route.key == 'france')
          return <FontAwesome5Icon name="people-carry" size={18} color={focused ? appWhite : appWhiteLight } />
        else
          return <MaterialIconsIcon name="location-city" size={18} color={focused ? appWhite : appWhiteLight } />
      }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? appWhite : appWhiteLight }}> {route.title} </Text>
      )}
      style={{ 
        backgroundColor: appMainColor,
      }}
      tabStyle={{
        borderBottomWidth: 2,
        borderBottomColor: appWhite,
        shadowOffset: { height: 0, width: 0 }, 
        shadowColor: appWhite,
        shadowOpacity: 1,
        elevation: 0,
      }}
    />
  );

  const onIndexChange = (e) => {
    setIndex(e);
    fetchData(
      e == 0 ? CATEGORY_ID.france : CATEGORY_ID.province, 
      e == 0 ? setFranceData : setProvinceData,
      e == 0 ? setFranceLoading : setProvinceLoading,
    );
  }

  return (
    <>
      <Toolbar 
        title={'Explore'}
        addButtonFunc={() => {
          navigation.navigate('Soumettre Janaza')
        }}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={onIndexChange}
        renderTabBar={renderTabBar}
        initialLayout={initialLayout}
      />
    </>
  );
};

export default Explore;
