import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import api from '../utils/api';

const Zip = (props) => {
    const [data, setData] = useState();
    const [search, setSearch] = useState();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if (search) {
            api().get(`/zips/${search}`)
                .then(res => {
                    setData(res.data)
                })
                .catch(err => console.log("Error on api"))
        }
    }, [refresh])

    const handleSubmit = (e) => {
        e.preventDefault();
        setRefresh(!refresh);
        setSearch();
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder="Zip Code" value={search} onChangeText={(text) => setSearch(text)} style={styles.input} />
            <Button title="Submit" style={styles.button} onPress={handleSubmit} />
            {data && (  
            <View>
                <Text style={styles.data}>{data.city}</Text> 
                <Text style={styles.data}> Saturday Delivery: {data.delivery}</Text>
            </View>
            )
            }
        </View>
    )
}

export default Zip;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    text: {
        fontSize: 25
    },
    input: {
        width: 100,
        height: 60,
    },
    data: {
        fontSize: 30,

    }
})