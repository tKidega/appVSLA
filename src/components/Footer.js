// Import libraries to help create a component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Create a conmponent
const Footer = (props)=> {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.appFooter}</Text>
		</View>
	);
}
// Add styling properties to elements
const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		backgroundColor: 'cyan',
		justifyContent: 'center',
		alignItems: 'center',
		height: 20,
	},
	textStyle: {
		fontSize: 20,
		color: 'gray'
	},
});
// Avail this component to other pars of the app
export default Footer;
