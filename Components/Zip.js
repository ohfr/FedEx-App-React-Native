import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator } from 'react-native';
import api from '../utils/api';
import { Link } from 'react-router-native';

const Zip = (props) => {
    const [data, setData] = useState();
    const [search, setSearch] = useState();
    const [refresh, setRefresh] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        if (search) {
            api().get(`/zips/${search}`)
                .then(res => {
                    setData(res.data)
                    setSearch();
                    setSpinner(!spinner)
                })
                .catch(err => setError("Could not find zip code"))
        }
    }, [refresh])

    const handleSubmit = (e) => {
        e.preventDefault();
        setRefresh(!refresh);
        setSpinner(!spinner)
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TextInput placeholder="Zip Code" value={search} onChangeText={(text) => setSearch(text)} style={styles.input} />
                <Button title="Submit" style={styles.button} onPress={handleSubmit} />
                {spinner && (
                    <View style={styles.spinner}>
                        <ActivityIndicator color="#1DA1F2" size="large" />
                    </View>
                )}
                {data && (  
                <View style={styles.container}>
                    <Text style={styles.data}>{data.city}</Text> 
                    <Text style={styles.delivery}> Saturday Delivery: {data.delivery}</Text>
                </View>
                )
                }
                {error && (
                    <View>
                        <Text>{error} </Text>
                    </View>
                )}
            </View>
            <Link to="/" style={styles.link}>
                <Text style={styles.linkText}>Home</Text>
            </Link>
        </View>
    )
}

export default Zip;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        fontSize: 25
    },
    input: {
        width: 100,
        height: 60,
        fontSize: 20,

    },
    data: {
        fontSize: 30,
    },
    delivery: {
        fontSize: 20
    },
    linkText: {
        fontSize: 20,
        color: 'white'
    },
    link: {
        width: 70,
        backgroundColor: '#1DA1F2',
        alignItems: 'center',
        alignSelf: 'center',

    }
})