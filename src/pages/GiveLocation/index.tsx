import React from 'react';
import { View , ImageBackground, Text} from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; // usado para fazer a navegaçãod e paginas

import giveLocationBgImage from '../../assets/images/give-location-bg.png'

import styles from './styles'

function GiveLocation (){

	const navigation = useNavigation();

	function handleNavigateBack(){
		navigation.goBack();
	}


	return (
	<View style={styles.container}>
		<ImageBackground source={ giveLocationBgImage } style={styles.content} imageStyle={{opacity:0.2}}>

			<Text style={styles.title}>Você permite o acesso à sua localização?</Text>
			<Text style={styles.description}>Tenha certeza que a localização do seu celular está ativa</Text>
			<RectButton onPress={handleNavigateBack} style={styles.okButton}>
			<Text style={styles.okButtonText}>Tudo bem</Text>
		</RectButton>

		</ImageBackground>

		
	</View>
	
	);

}

export default GiveLocation;

