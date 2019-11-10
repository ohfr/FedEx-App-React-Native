import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const Home = (props) => {

    return (
        <View style={styles.container}>
        <Link to="/Zip" style={styles.buttons}>
          <Text style={styles.buttonText}>Search By Zip</Text>
        </Link>
        <Link to="/City" style={styles.buttons}>
          <Text style={styles.buttonText}>Search By City</Text>
        </Link>
        {/* <Link to="/All" style={styles.buttons}>
            <Text style={styles.buttonText}>See All</Text>
        </Link> */}
        </View>
    )
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
        height: 70,
        backgroundColor: '#1DA1F2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',

      }
});

export default Home;