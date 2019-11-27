//Import Libraries that will help create|make a component
import React from 'react';
import {AppRegistry, Text} from 'react-native';

//Create a component
const App = () => {
  // For single line code only
  return <Text>Test one component displayed</Text>
};

//Render compnent to the device
AppRegistry.registerComponent('appVSLA', () => App);
