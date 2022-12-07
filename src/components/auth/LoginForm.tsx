import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, {useContext, useState} from 'react';
import { ContextMovies } from '../../context/Context';
import {useFormik} from 'formik';
import { user, userDetails } from '../../utils/UserDB';

const LoginForm = () => {

    const [error, setError] = useState('')

    const {login} : any = useContext(ContextMovies)

    const formik = useFormik({
        initialValues: {username: '', password: ''},
        onSubmit: (formValue) => {
            setError('');
            const {username, password} = formValue;

            if(username !== user.username || password !== user.password){
                setError('username or password is not correct')
            } else {
                login(userDetails)
            }
        }
    });


    
    return (
        <View>
            <Text style={styles.title}>Login</Text>
            <TextInput 
                placeholder='Username'
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={ (text) => formik.setFieldValue('username', text)}
            />
            <TextInput 
                placeholder='Password'
                style={styles.input}
                secureTextEntry={true}
                autoCapitalize="none"
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            <Button 
                title='Login'
                onPress={ formik.handleSubmit as (values: any) => void}
            />

            <Text style={styles.errors} > {error} </Text>
        </View>
    )
}

export default LoginForm;

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    errors: {
        textAlign: "center",
        color: "#f00",
        marginTop: 10,
    },
})