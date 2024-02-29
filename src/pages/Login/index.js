import React from "react";
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();

    function navegaHome(){
        navigation.navigate('Home');
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
                    />
                    
                    <Text style={styles.textoInput}>Senha:</Text>
                    <TextInput
                    style={styles.input}
                    />

                    <TouchableOpacity 
                    style={styles.btnLogin}
                    onPress={ () => navigation.navigate('Home') }>
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