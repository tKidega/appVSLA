// Import libraries to help create a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Create a component
const Title = (props) => {
	return(
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.tagLine}</Text>
		</View>
	);
};
// Add styling prperties to elements
const styles = StyleSheet.create({
	//Styling the viewbox
	viewStyle:{
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		height: 35,
	},
	//Styling the text
	textStyle:{
		fontSize: 20,
		color: 'gray'
	},
});
// Avail this component to other parts of the app
export default Title;
