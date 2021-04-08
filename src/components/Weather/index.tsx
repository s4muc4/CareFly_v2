
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import PropTypes from 'prop-types';
import styles from './styles'

//import { weatherConditions } from '../../utils/WeatherConditions';

type PropsType = {
	temperature: any,
	city: any,
	windSpeed: any,
	descriptionWeather: any,
	weather: any,
	visibility: any,
	humidity: any,
}
const Weather = ({ temperature, weather, city, windSpeed, descriptionWeather, visibility, humidity }: PropsType) => {
	return (
		<View style={styles.weatherContainer}>
			<View style={styles.headerContainer}>
				<MaterialCommunityIcons size={48} name="weather-cloudy" color={'#fff'} />
				<Text style={styles.tempText}>{temperature}C˚</Text>
			</View>
			<View style={styles.bodyContainer}>

				<Text style={styles.title}>{weather}</Text>
				<Text style={styles.subtitle}>{descriptionWeather}</Text>

				<Text style={styles.title}>Himidity</Text>
				<Text style={styles.subtitle}>{humidity}%</Text>

				<Text style={styles.title}>Visibility</Text>
				<Text style={styles.subtitle}>{visibility}</Text>

				<Text style={styles.title}>Wind Speed</Text>
				<Text style={styles.subtitle}>{windSpeed}</Text>

				<Text style={styles.title}>{city}</Text>



			</View>
		</View>
	);
};



export default Weather;