import React, {Component} from 'react';
import { StyleSheet,
 			Text,
 			 View,
 			 Button,
 			 Image } from 'react-native';

 class LoginScreen extends Component {
	render(){
		return (

		<View style={styles.container}>
		<Image  />
      		<Text style={styles.heading}>Welcome to Formula list!</Text>
      		<Button onPress={()=>this.props.navigation.navigate('HomeScreen')} title="Continue" />
      	</View>
      );
	}
}



const styles = StyleSheet.create ({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(41, 128, 185)',
  },
heading:{ fontSize:15,
			fontWeight:'bold',
			marginBottom:10,
 },

});


export default LoginScreen;