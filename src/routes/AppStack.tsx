import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing'
import GiveLocation from '../pages/GiveLocation'
import ViewWeather from '../pages/ViewWeather'

const { Navigator, Screen} = createStackNavigator();

function AppStack(){
	return(
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name = "Landing" component = {Landing}/>
				<Screen name = "GiveLocation" component = {GiveLocation}/>
				<Screen name = "ViewWeather" component = {ViewWeather}/>
			</Navigator>
		</NavigationContainer>
	)

}

export default AppStack;