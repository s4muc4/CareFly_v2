
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; // usado para fazer a navegaçãod e paginas

import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';




import * as Permissions from 'expo-permissions';


import giveLocationBgImage from '../../assets/images/give-location-bg.png'

import styles from './styles'

function GiveLocation (){

	/* onst [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  } */

  const navigation = useNavigation();

  function handleNavigateToViewWeather(){
	navigation.navigate('ViewWeather')
}
  

	

	function handleNavigateBack(){
		navigation.goBack();
	}


	return (
	<View style={styles.container}>
		<ImageBackground source={ giveLocationBgImage } style={styles.content} imageStyle={{opacity:0.2}}>

			<Text style={styles.title}>Você permite o acesso à sua localização?</Text>
			<Text style={styles.description}>Tenha certeza que a localização do seu celular está ativa</Text>
			<RectButton onPress={handleNavigateToViewWeather} style={styles.okButton}>
			
			<Text style={styles.okButtonText}>Tudo bem</Text>
		</RectButton>
		{/* <Text style={styles.description}>{text}</Text> */}

		</ImageBackground>

		
	</View>
	
	);

}

export default GiveLocation;

