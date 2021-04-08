import { StatusBar,} from 'expo-status-bar';

import View from './src/pages/Landing';


import React, { useState, useEffect } from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';


import * as Permissions from 'expo-permissions';


import { AppLoading } from 'expo';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import AppStack from './src/routes/AppStack';

// JSX - XMl dentro do JavaScript

export default function App() {

  
  

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <>
        <AppStack />
        <StatusBar style='auto' />
      </>
    );
  }
}

