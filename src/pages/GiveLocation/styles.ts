import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
	flex:1,
	backgroundColor: '#B5E4FF',
	justifyContent: 'center',
},

content:{
	flex: 1,
	justifyContent: 'center',
	
	
},

title:{
	fontFamily: 'Archivo_700Bold',
	color: 'black',
	fontSize: 32,
	lineHeight: 37,
	textAlign: 'center',	
	margin:20
},

description:{
	marginTop: 24,
	color: 'black',
	fontSize: 16,
	lineHeight:26,
	fontFamily: 'Poppins_400Regular',
	textAlign: 'center',
	margin:10
},

okButton:{
	marginVertical: 40,
	backgroundColor: '#4277FF',
	height: 58,
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 10,
	margin: 20,
},

okButtonText:{
	color: 'black',
	fontSize: 16,
	fontFamily: 'Archivo_700Bold',
},





});

export default styles;