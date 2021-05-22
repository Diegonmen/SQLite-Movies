import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/screens/home/HomeScreen';
import MoviesScreen from './components/screens/movies/MoviesScreen';
import SeriesScreen from './components/screens/series/SeriesScreen';
import GenresScreen from './components/screens/genres/GenresScreen';
import CountriesScreen from './components/screens/countries/CountriesScreen';
import ScoreScreen from './components/screens/score/ScoreScreen';
import ReleaseDateScreen from './components/screens/releaseDate/ReleaseDateScreen';

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
          name="Genres"
          component={GenresScreen}
          options={{title: 'Géneros'}}
        />
        <Stack.Screen
          name="Countries"
          component={CountriesScreen}
          options={{title: 'Filtrar por pais'}}
        />
        <Stack.Screen
          name="Score"
          component={ScoreScreen}
          options={{title: 'Filtrar por puntuación'}}
        />
        <Stack.Screen
          name="ReleaseDate"
          component={ReleaseDateScreen}
          options={{title: 'Filtrar por fecha de estreno'}}
        />
        <Stack.Screen
          name="Pelicula"
          component={MoviesScreen}
          options={{title: 'Ver pelicula'}}
        />
        <Stack.Screen
          name="Serie"
          component={SeriesScreen}
          options={{title: 'Ver serie'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}