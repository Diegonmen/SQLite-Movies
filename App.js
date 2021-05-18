import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/screens/home/HomeScreen';
import MoviesScreen from './components/screens/movies/MoviesScreen';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'HomeScreen'}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Inicio'}}
        />
        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
          options={{title: 'Películas'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}