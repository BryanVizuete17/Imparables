import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Informacion} from './screens/Informacion';
import {Registro} from './screens/Registro';
import {Encuestas} from './screens/Encuestas';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabHome(){
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="InformacionScreen"
         component={Informacion}
         options={{
          tabBarLabel:"Informacion",
          tabBarIcon:()=>(
          <Icon
          name='user'
          size={32}
          color="skyblue"/>
        )      
       }}
       ></Tab.Screen>

       <Tab.Screen 
         name="RegistroScreen"
         component={Registro}
         options={{
          tabBarLabel:"Registro",
          tabBarIcon:()=>(
            <Icon
            name='user'
            size={32}
            color="skyblue"/>
          )      
         }}
         ></Tab.Screen>

         <Tab.Screen
          name="EncuestasScreen"
          component={Encuestas}
          options={{
          tabBarLabel:"Encuestas",
          tabBarIcon:()=>(
          <Icon
          name='user'
          size={32}
          color="skyblue"/>
        )      
       }}
       ></Tab.Screen>
    </Tab.Navigator>
  ) 
  }

  export default function App() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="TabHomeScreen">
              <Stack.Screen name="TabHomeScreen" component={TabHome}></Stack.Screen>
              <Stack.Screen name="InformacionScreen" component={Informacion}></Stack.Screen>
              <Stack.Screen name="RegistroScreen" component={Registro}></Stack.Screen>
              <Stack.Screen name="EncuestasScreen" component={Encuestas}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  