/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//Import Libraries that will help create|make a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component
const App = () => (
	// For single line code only
	<Header headerText={'App Header'}/>
);

//Render compnent to the device
AppRegistry.registerComponent('vsla', () => App);
