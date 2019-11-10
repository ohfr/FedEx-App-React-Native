/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NativeRouter, Route, Link } from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Link to="/Zip" style={styles.buttons}>
          <Text style={styles.buttonText}>Search By Zip</Text>
        </Link>
        <Link to="/City" style={styles.buttons}>
          <Text style={styles.buttonText}>Search By City</Text>
        </Link>
      </View>
    </NativeRouter>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  buttons: {
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  }
});

export default App;
