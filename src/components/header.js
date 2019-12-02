// Import Libraries to help create|make a component
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Create a component
const Header = (props) => {
	// For single line code only
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.mainHeader}</Text>
		</View>
	);
};
//Add styling pr0perties to elements
const styles = StyleSheet.create ({
	//Style the view box
	viewStyle: {
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		height: 275,
		paddingTop: 0,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 25},
		shadowOpacity: 0.5,
		elevation: 2,
		position: 'relative'
	},
	//Style viewbox content
	textStyle: {
		fontSize: 35,
		color: 'gray',
		fontWeight: 'bold',
		opacity: 0.9,
		letterSpacing: 1
	},
});
// Avail Header component to other parts of the App
export default Header;
