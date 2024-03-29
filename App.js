
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import { NativeRouter, Route, Link } from 'react-router-native';
import Zip from './Components/Zip';
import Home from './Components/Home';
import City from './Components/City';

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route exact path="/Zip" component={Zip} />
        <Route exact path="/City" component={City} />
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
