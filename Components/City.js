import React, { useState, useEffect }  from 'react';
import { View, Text, TextInput, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import api from '../utils/api';

const City = (props) => {
    const [error, setError] = useState();
    const [spinner, setSpinner] = useState(false);
    const [refresh, setReferesh] = useState(false);
    const [city, setCity] = useState();
    const [data, setData] = useState();
    useEffect(() => {
        if (city) {
            if (city.includes(' ')) {
                let splitCity = city.split(' ');
                let concatCity = splitCity.join("-")
                console.log(concatCity)
                api().get(`/city/${concatCity}`)
                    .then(res => {
                        setData(res.data)
                        setCity();
                        setSpinner(!spinner)
                        console.log('Success on api')
                        console.log(res)
                    })
                    .catch(err => {
                        setError("Could not find city")
                    })
            } else {
                api().get(`/city/${city}`)
                    .then(res => {
                        setData(res.data)
                        setCity();
                        setSpinner(!spinner)
                        console.log("success on api single word")
                        console.log(data)
                        console.log(res)
                    })
                    .catch(err => {
                        setError("Could not find city")
                    })
            }
        }
    }, [refresh])

    const handleSubmit = (e) => {
        e.preventDefault();
        setReferesh(!refresh);
        setSpinner(!spinner)
    }
    return (
        <View>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="City" onChangeText={(text) => setCity(text) }/>
                <Button title="Submit" onPress={handleSubmit} />
                {spinner && (
                    <View style={styles.spinner}>
                        <ActivityIndicator color="#1DA1F2" size="large" />
                    </View>
                )
                }

                {data && data.length == null && (
                    <View style={styles.container}>
                        <Text style={styles.data}>{data.city}, {data.zip}</Text> 
                        <Text style={styles.delivery}> Saturday Delivery: {data.delivery}</Text>
                    </View>
                ) 
                }

                { data && data.length > 2 &&
                (
                    data.map((cur, index) => (
                        <View style={styles.container} key={index}>
                            <Text style={styles.datamap}>{cur.city}, {cur.zip}</Text> 
                            <Text style={styles.deliverymap}> Saturday Delivery: {cur.delivery}</Text>
                        </View>
                    ))
                )
                
                }
                
                {error && (
                    <View>
                        <Text>{error} </Text>
                    </View>
                )}
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

    },
    input: {
        width: 100,
        fontSize: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    data: {
        fontSize: 30,
    },
    delivery: {
        fontSize: 20
    },
    datamap: {
        fontSize: 15
    },
    deliverymap: {
        fontSize: 15
    }
})

export default City;