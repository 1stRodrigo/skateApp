import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function Cadastro(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    const navigation = useNavigation();

    async function handleCreateUser(){

        createUserWithEmailAndPassword(auth, email, password)
        .then( (user) => {
            console.log(user);
            console.log("Conta cadastrada:");
            navigation.navigate('Login')
            setEmail('');
            setPassword('');
        })
        .catch( err => {
            if(err.code === "auth/missing-password"){
                alert('Preencha todos os campos corretamente.')
                return;
            }
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.areaCadastro}>
                <Text style={styles.titulo}> Criar nova conta </Text>

                <Text style={styles.textInput}>Usuario: </Text>
                <TextInput
                style={styles.input}
                placeholder=" Nome de usuário"
                underLineColorAndroid="transparent"
                value={user}
                onChangeText={ (text) => setUser(text)}
                />

                <Text style={styles.textInput}> Email:</Text>
                <TextInput
                style={styles.input}
                placeholder=" Digite seu email"
                underLineColorAndroid="transparent"
                value={email}
                onChangeText={ (text) => setEmail(text)}
                />

                <Text style={styles.textInput}> Senha: </Text>
                <TextInput
                style={styles.input}
                placeholder=" Digite sua senha"
                underLineColorAndroid="transparent"
                value={password}
                onChangeText={ (text) => setPassword(text)}
                />


                <TouchableOpacity 
                style={styles.btnCriar}
                onPress={ handleCreateUser }
                title="nova conta">
                    <Text style={styles.btntext}>Criar conta</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    areaCadastro:{
        width: "90%",
        backgroundColor: "#1211",
        margin: 8,
        padding: 10,
        borderRadius: 5,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: "center"
    },
    input: {
        backgroundColor: "#FFF",
        marginBottom: 8,

    },
    textInput:{
        fontSize: 16,
        marginBottom: 2,
        fontWeight: '500',
    },
    btnCriar: {
        backgroundColor: "#cf1212",
        borderRadius: 5,
        marginTop: 10,
    },
    btntext: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 20,
        padding: 5,
    }
    
})