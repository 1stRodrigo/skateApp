import React, { useState } from "react";
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from "firebase/auth";

import Home from "../Home";


export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [authUser, setAuthUser] = useState(null);

    const navigation = useNavigation();

    async function handleLogin(){

        signInWithEmailAndPassword(auth, email, password)
        .then( (user) => {
            console.log(user);
            console.log("USUARIO LOGADO:");
            navigation.navigate('HomeTab');
            setAuthUser({
                email: user.user.email,
                uid: user.user.uid
                //Pesquisar alguma forma de passar esse email cadastrado
                // para a pagina de opcoes
            })
            
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
            <View style={styles.areaLogin}>
                <Text style={styles.textoInput}> SkateApp </Text>
                <Text style={styles.textoInput}> Spots, Gaps, Pistas</Text>                
            </View>


            <View style={styles.areaInput}>
                <Text style={{color:"#FFF", textAlign: "center", fontSize: 18}}>Entre na sua conta:</Text>
                    <Text style={styles.textoInput}>Email:</Text>
                    <TextInput
                    style={styles.input}
                    underLineColorAndroid="transparent"
                    value={email}
                    onChangeText={ (text) => setEmail(text)}
                    />
                    
                    <Text style={styles.textoInput}>Senha:</Text>
                    <TextInput
                    style={styles.input}
                    underLineColorAndroid="tansparent"
                    value={password}
                    onChangeText={ (text) => setPassword(text)}
                    />

                    <TouchableOpacity 
                    style={styles.btnLogin}
                    onPress={ handleLogin }>
                        <Text style={styles.textoBtn}>Entrar</Text>
                    </TouchableOpacity>
            </View>

                        <TouchableOpacity 
                        style={{}} 
                        onPress={ () => navigation.navigate('Cadastro') }>
                            <Text style={{fontSize: 17, fontWeight:'500',margin: 7}}>
                                Clique aqui para se cadastrar
                                </Text>
                        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    areaLogin:{
        backgroundColor: "#191919",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
    },
    areaInput:{
        width: "90%",
        backgroundColor: "#cf1212",
        margin: 8,
        padding: 10,
        borderRadius: 5,
    },
    textoInput:{
        color: "#fff",
        fontSize: 17,
        marginLeft: 3,
        fontWeight: '500'
    },
    input:{
        borderBottomWidth: 1,
        borderColor: "#FFF",
        marginBottom: 40,
        color: '#FFF',
    },
    btnLogin:{
        backgroundColor: "#191919",
        borderRadius: 5,
    },
    textoBtn:{
        textAlign: "center",
        color: "#FFF",
        fontSize: 20,
        padding: 5,
    }
})