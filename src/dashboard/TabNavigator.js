import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Styles, {appMainColorLight, appWhiteLight, appWhite} from './../components/Styles';
import ExploreScreen from './../dashboard/explore/Explore'
import SavedEventsScreen from './../dashboard/savedevents/SavedEvents'
import CreateEventScreen from './createEvent/CreateEvent'
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
  
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
  
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[Styles.bottomTab]}
              key={label}
              activeOpacity={1}
            >
              { label == 'Saved Events' && <MaterialIconsIcon name="event" size={18} color={isFocused ? appWhite : appWhiteLight} /> }
              { label == 'Explore' && <FeatherIcon name="search" size={18} color={isFocused ? appWhite : appWhiteLight} /> }
              { label == 'Soumettre Janaza' && <IoniconsIcon name="create-outline" size={18} color={isFocused ? appWhite : appWhiteLight} /> }
              <Text style={[isFocused ? Styles.bottomTabTextActive : Styles.bottomTabText]}>
                { label }
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} initialRouteName={'Explore'}>
      <Tab.Screen name="Saved Events" component={SavedEventsScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Soumettre Janaza" component={CreateEventScreen} />
    </Tab.Navigator>
  );
}