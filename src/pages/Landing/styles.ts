import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
	flex:1,
	backgroundColor: '#B5E4FF',
	justifyContent: 'center',
	padding: 30,
},

banner: {
	marginTop: 40,
	width:'100%', 
	resizeMode: 'contain' // redimensionar proporcionalmente a largura e altura (TODA O CONTEUDO É VISIVEL)
},

title:{
	fontFamily: 'Poppins_400Regular',
	color: 'black',
	fontSize: 20,
	lineHeight:30,
	marginTop: 30,
},

titleBold:{
	fontFamily: 'Poppins_600SemiBold',
},

buttonsContainer:{
	flexDirection: 'row',
	marginTop:40,
	justifyContent: 'space-between',
},

button:{
	height: 150,
	width: '48%',
	backgroundColor: "#779DFF",
	borderRadius: 8,
	padding: 10,
	justifyContent: 'space-between',
},

buttonPrimary:{
	backgroundColor: '#4277FF'
},

buttonSecondary:{
	backgroundColor: '#18304b'
},

buttonText: {
	fontFamily: 'Archivo_700Bold',
	color: '#FFF',
	fontSize: 20,
	textAlign: 'center',
	marginBottom: 20
	
},

totalConnections:{
	fontFamily: 'Poppins_400Regular',
	fontSize: 12,
	lineHeight: 20,
	textAlign: 'center',
	marginTop: 40,
},

iconCloud:{
	
	width: '100%',
	resizeMode: 'contain',
	marginLeft: 'auto',
	
},


});

export default styles;