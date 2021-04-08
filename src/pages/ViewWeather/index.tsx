
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { API_KEY } from '../../utils/WeatherAPIKey';

import Weather from '../../components/Weather';
import weatherConditions from '../../utils/WeatherConditions'

import styles from './styles'

export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    city: null,
    windSpeed: 0,
    descriptionWeather: null,
    weatherCondition: null,
    visibility: 0,
    humidity: 0,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );
  }

  

  fetchWeather(lat = 25, lon = 25) {
	  
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
	  
      .then(json => {
         console.log(json);
        this.setState({
          temperature: json.main.temp,
          city: json.name,
          windSpeed: json.wind.speed,
          descriptionWeather:json.weather[0].description,
          weatherCondition: json.weather[0].main,
          visibility:json.visibility,
          isLoading: false,
          humidity: json.main.humidity,
		  
        });
		
      });
  }

  render() {
    const { isLoading } = this.state;
    
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> :  <Weather 
        temperature={this.state.temperature} city={this.state.city} windSpeed={this.state.windSpeed} descriptionWeather={this.state.descriptionWeather} 
        weather={this.state.weatherCondition} visibility={this.state.visibility}  humidity={this.state.humidity} />}
		
		
      </View>
    );
  }
}

