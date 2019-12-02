/**
 * Sample VSLA React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import Header from './src/components/header';
import Title from './src/components/title';
import Login from './src/components/login';
import Footer from './src/components/footer';

class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header mainHeader={'cupBanker'}/>
				<Title tagLine={'This is a tag line'}/>
				<Login userLogin={'Login options'}/>
				<Footer appFooter={'Footer options here'}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
// Render this to device
AppRegistry.registerComponent('vsla', ()=> App);
