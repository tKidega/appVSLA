// Import Libraries to help create|make a component
import React from 'react';
import {Text, View} from 'react-native';

// Create a component
const Header = (props) => {
	const {textStyle, viewStyle} = styles;
	// For single line code only
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};
// Add styling to elements
const styles ={
	//Style the view box
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 75,
		paddingTop: 0.5,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 20},
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
	}
};

// Avail this component to other page's of the app
export default Header;
