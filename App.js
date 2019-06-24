import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './screens/Home';
import TemporadaScreen from './screens/Temporada'
import MenuScreen from './screens/Menu'
import ListaItemScreen from './screens/ListaItem'
import DetalhesScreen from './screens/Detalhes'

const AppNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
    },
    Temporada: {
      screen:TemporadaScreen,
    },
    Menu:{
      screen:MenuScreen,
    },
    ListaItem:{
      screen:ListaItemScreen,
    },
    Detalhes: {
      screen:DetalhesScreen
    }
  },
  {
    initalRouteName:'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      },
    },
  }

);

export default createAppContainer(AppNavigator);


