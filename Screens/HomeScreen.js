import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator} from 'react-navigation';


 class HomeScreen extends Component {
	render(){
		return (
		<View style={styles.container}>
      		<Text>This is the home screen.</Text>
      	</View>
      );
	}
}

class Notifications extends Component{
	render(){

		return(
				<View style={styles.container}>
					<Text>Notifications Display</Text>
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


const HomeScreenTabNavigator = TabNavigator({
	HomeScreen :{screen:HomeScreen},
	Notifications : {screen:HomeScreen,animationEnabled:true},

});



export default HomeScreenTabNavigator;