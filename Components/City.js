import React from 'react';
import { View, Text, TextInput, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const City = (props) => {

    return (
        <View>
            <View style={styles.container}>
                <TextInput />
                <Button title="Submit" />
            </View>
            <Link to="/" style={styles.link}>
                <Text style={styles.linkText}> Home </Text>
            </Link>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkText: {
        fontSize: 20,
        color: 'white',

    },
    link: {
        backgroundColor: '#1DA1F2',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    }
})

export default City;