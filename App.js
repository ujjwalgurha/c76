import { StatusBar } from 'expo-status-bar';
import * as React  from 'react' ;
import { StyleSheet, Text, View } from 'react-native';
import'react-native-gesture-handler' 
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     < Stack.Navigator  initialRouteName='Home' screenOptions={{headerShown:false}}>
    <Stack.Screen name = "Home" component = {HomeScreen}/>
    <Stack.Screen name = "IssLocation" component = { IssLocationScreen}/>
    <Stack.Screen name = "Meteors" component = {MeteorScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

