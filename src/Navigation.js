import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './dashboard/Dashboard';
import Global from './components/Global';

const Stack = createStackNavigator();

const MyStack = () => {

  React.useEffect(() => {
    Global.init();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;