// Import libraries to help creat a component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Create a component
const Login = (props)=> {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.loginText}>{props.userLogin}</Text>
		</View>
	);
}
// Add styling prperties to elements
const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center',
		height: 215,
	},
	loginText: {
		fontSize: 25,
		fontWeight: 'normal'
	},
});
// Avvailing component to other parts of the app
export default Login;
