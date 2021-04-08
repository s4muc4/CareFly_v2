import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	weatherContainer: {
	  flex: 1,
	  backgroundColor: '#66C4F9'
	},
	headerContainer: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center'
	},
	tempText: {
	  fontSize: 48,
	  color: '#fff'
	},
	bodyContainer: {
	  flex: 3,
	  
	  justifyContent: 'flex-start',
	  
	  marginBottom: 40,
	  alignItems: 'center',
	},
	title: {
	  fontSize: 40,
	  color: '#fff'
	},
	subtitle: {
	  fontSize: 24,
	  color: '#fff',
	  marginBottom: 20
	}
  });

  export default styles;