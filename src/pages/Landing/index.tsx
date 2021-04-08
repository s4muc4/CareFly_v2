import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'; //usado pra criar as tags
import { useNavigation } from '@react-navigation/native'; // usado para fazer a navegaçãod e paginas
import { RectButton } from 'react-native-gesture-handler';// usado para fazer a animação do botao de acordo com o sistema operacional

import styles from './styles'

import landingImg from '../../assets/images/drone.png'
import cloudImg from '../../assets/images/cloud.png'
import cloudHappyImg from '../../assets/images/cloud_happy.png'

function Landing() {

	const navigation = useNavigation();

	function handleNavigateToGiveLocationPage(){
		navigation.navigate('GiveLocation')
	}

	return (
		<View style={styles.container}>
			<Image source={landingImg} style={styles.banner}/>

			<Text style={styles.title}>
				Seja bem-vindo, {'\n'}
				<Text style={styles.titleBold}>O que deseja fazer?</Text>
			</Text>

			<View style={styles.buttonsContainer}>
				<RectButton onPress={handleNavigateToGiveLocationPage}  style={[styles.button, styles.buttonPrimary]}>
					<Image source={cloudImg} style={styles.iconCloud}/>

					<Text style={styles.buttonText}>Conferir clima</Text>
				</RectButton>

				<RectButton style={[styles.button, styles.buttonSecondary]}>
					<Image source={cloudImg} style={styles.iconCloud}/>

					<Text style={styles.buttonText}>Botao 2</Text>
				</RectButton>
			</View>

			<Text style={styles.totalConnections}>
				Total de 285 consultas já realizadas {' '}
				
			</Text>
		</View>
	);
}

export default Landing;