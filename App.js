import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './screens/Home';
import TemporadaScreen from './screens/Temporada'

const AppNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
    },
    Temporada: {
      screen:TemporadaScreen,
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


