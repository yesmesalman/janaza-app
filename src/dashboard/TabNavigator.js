import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Styles, {appBlackLight, appWhiteLight, appWhite} from './../components/Styles';
import SettingsScreen from './../dashboard/settings/Settings'
import ExploreScreen from './../dashboard/explore/Explore'
import ProfileScreen from './../dashboard/profile/Profile'
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
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
            >
              { label == 'Profile' && <IoniconsIcon name="person" size={20} color={isFocused ? appWhite : appWhiteLight} /> }
              { label == 'Explore' && <FeatherIcon name="search" size={20} color={isFocused ? appWhite : appWhiteLight} /> }
              { label == 'Settings' && <AntDesignIcon name="setting" size={20} color={isFocused ? appWhite : appWhiteLight} /> }
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
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}