import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ focused }) => (<Ionicons name={focused ? 'home' : 'home-outline'} size={26} style={{ marginBottom: -3 }}/>),}}/>
        <Tab.Screen name="Settings" component={SecondScreen} options={{tabBarIcon: ({ focused }) => (<Ionicons name={focused ? 'settings' : 'settings-outline'} size={26} style={{ marginBottom: -3 }}/>),}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
