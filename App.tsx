/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// React-navigation for screen navigation
import {NavigationContainer} from '@react-navigation/native'
import MainScreen from './src/components/MainScreen'

const App = () => {
  return (
    <NavigationContainer>

      <MainScreen></MainScreen>

    </NavigationContainer>

  );
};



export default App;