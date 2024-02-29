import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Home from "../Home";

export default function Cadastro(){
    const navigation = useNavigation();
    /*
    const route = useRoute();
    */

    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <View style={styles.container}>
            <View style={styles.areaCadastro}>
                <Text style={styles.titulo}> Criar nova conta </Text>

                <Text style={styles.textInput}>Usuario: </Text>
                <TextInput
                style={styles.input}
                underLineColorAndroid="transparent"
                onChangeText={(texto) => setUsuario(texto)}
                value={usuario}
                />

                <Text style={styles.textInput}> Email:</Text>
                <TextInput
                style={styles.input}
                underLineColorAndroid="transparent"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
                />

                <Text style={styles.textInput}> Senha: </Text>
                <TextInput
                style={styles.input}
                underLineColorAndroid="transparent"
                onChangeText={(texto) => setSenha(texto)}
                value={senha}
                />


                <TouchableOpacity 
                style={styles.btnCriar}
                onPress={ () => navigation.navigate('Login') }
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