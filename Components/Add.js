import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import api from '../utils/api';

const Add = (props) => {
    const [data, setData] = useState({
        city: '',
        zip: '',
        delivery: ''
    });
    const [added, setAdded] = useState(false);
    const [success, setSuccess] = useState();
    const [error, setError] = useState()
    useEffect(() => {
        setSuccess(false);
        if (data) {
            api.post('/api', data)
                .then(res => {
                    if (res) {
                        setSuccess(true);
                    }
                })
                .catch(err => {
                    setError("Error adding entry")
                })
        }
    }, [added])

    const handleSubmit = () => {
        setAdded(!added);
    }
    return (
        <View styles={styles.contaner}>
            <TextInput placeholder="City" value={data.city} onChangeText={(text) => setData({...data, text})} />

            <TextInput placeholder="Zip Code" value={data.zip} onChangeText={(text) => setData({...data, text})} />

            <TextInput placeholder="Delivery" value={data.delivery} onChangeText={(text) => setData({...data, text})} />

            <Button title="Submit" onPress={handleSubmit} />
            
            {success && <Text style={styles.texts}>Successfully added</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
});

export default Add;