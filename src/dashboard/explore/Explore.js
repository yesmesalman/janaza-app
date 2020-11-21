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

import Styles, { appBackgroundWhite, appBlack, appBlackLight, appMainColor, appRed, appWhite } from './../../components/Styles';
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

const initialLayout = { width: Dimensions.get('window').width };


const Explore: () => React$Node = ({navigation}) => {

  const CATEGORY_ID = {
    france: 1,
    province: 2
  }

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'france', title: 'france' },
    { key: 'province', title: 'province' },
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
      console.log(err)
    }
  }

  React.useEffect(() => {
    fetchData(CATEGORY_ID.france, setFranceData, setFranceLoading)
  }, [])

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
                return(
                  <View key={i} style={[Styles.jListingRow, (i == 0) ? {marginTop: 16} : {}]}>
                    <View style={Styles.jListingLeft}>
                      <Text style={Styles.jListingDate}>{e.event_start_date.split('-')[2]}</Text>
                      <Text style={Styles.jListingMonth}>{monthNames[e.event_start_date.split('-')[1]]}</Text>
                    </View>
                    <View style={Styles.jListingCenter}>
                      <View style={Styles.jListingCenterTop}>
                        <Text style={Styles.jListingCity}>SALAT JANAZA - {e.location_city}</Text>
                        <Text>
                          <EntypoIcon name="address" size={16} />
                          {' '+e.location_address1}
                        </Text>
                        {
                          e.meta && e.meta.prayer &&
                          <Text style={Styles.jListingPrayer}>
                            <FontAwesome5Icon name="pray" size={16} />
                            {' '+e.meta.prayer}
                          </Text>
                        }
                        {
                          e.meta && e.meta.gender &&
                          <Text style={Styles.jListingPrayer}>
                            <IoniconsIcon name="person" size={16} />
                            <Text>{' '+ e.meta.gender}</Text>
                          </Text>
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
                    <TouchableWithoutFeedback onPress={async () => { await saveEvents(e.event_id, 'france')}}>
                      <View style={Styles.jListingRight}>
                        <AntDesignIcon name="heart" size={16} color={e.saved ? appRed : appBlack} />
                        <Text style={[Styles.jListingRightSaveText, e.saved ? Styles.jListingRightSaveColor : {}]}>SAVE</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                )
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
                return(
                  <View key={i} style={[Styles.jListingRow, (i == 0) ? {marginTop: 16} : {}]}>
                    <View style={Styles.jListingLeft}>
                      <Text style={Styles.jListingDate}>{e.event_start_date.split('-')[2]}</Text>
                      <Text style={Styles.jListingMonth}>{monthNames[e.event_start_date.split('-')[1]]}</Text>
                    </View>
                    <View style={Styles.jListingCenter}>
                      <View style={Styles.jListingCenterTop}>
                        <Text style={Styles.jListingCity}>SALAT JANAZA - {e.location_city}</Text>
                        <Text>
                          <EntypoIcon name="address" size={16} />
                          {' '+e.location_address1}
                        </Text>
                        {
                          e.meta && e.meta.prayer &&
                          <Text style={Styles.jListingPrayer}>
                            <FontAwesome5Icon name="pray" size={16} />
                            {' '+e.meta.prayer}
                          </Text>
                        }
                        {
                          e.meta && e.meta.gender &&
                          <Text style={Styles.jListingPrayer}>
                            <IoniconsIcon name="person" size={16} />
                            <Text>{' '+ e.meta.gender}</Text>
                          </Text>
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
                    <TouchableWithoutFeedback onPress={async () => { await saveEvents(e.event_id, 'province')}}>
                      <View style={Styles.jListingRight}>
                        <AntDesignIcon name="heart" size={16} color={saved ? appRed : appBlack}/>
                        <Text style={[Styles.jListingRightSaveText, saved ? Styles.jListingRightSaveColor : {}]}>SAVE</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                )
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
          return <FontAwesome5Icon name="people-carry" size={20} color={focused ? appBlack : appBlackLight } />
        else
          return <MaterialIconsIcon name="location-city" size={20} color={focused ? appBlack : appBlackLight } />
      }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? appBlack : appBlackLight }}> {route.title} </Text>
      )}
      style={{ 
        backgroundColor: appWhite,
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
