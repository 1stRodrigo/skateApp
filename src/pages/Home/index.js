import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { db } from '../../firebaseConnection';
import { doc, getDoc, onSnapshot } from 'firebase/firestore'

export default function Home(){
    const [nome, setNome] = useState('Carregando...');

    useEffect(()=> {
        async function getDados(){

            /*          
          const docref = doc(db, "users", "2")
          getDoc(docref)
          .then ((snapshot) => {
              setNome(snapshot.data()?.nome)
          })
          .catch((err) => {
            console.log("error: ")
            console.log(err);
          })
            */

          onSnapshot(doc(db, "users", "1"), (doc) => {
            setNome(doc.data()?.nome)
          })
      }
        getDados();
    },[])


    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
            <View style={styles.areaHome}>

                <Text style={styles.titulo}> Pagina sobre o App </Text>
                <Text style={styles.textoHome}> após o usuario logar ele vai ser direcionado até a esssa pagina</Text>
                <Text style={styles.textoHome}> INFORMAÇÕES DA CONTA: {nome}</Text>
                <Text style={styles.textoHome}> Email: -----</Text>
                <Text style={styles.textoHome}> Senha: -----</Text>
            
            </View>

            <TouchableOpacity 
                    style={styles.btnLogout}
                    onPress={ () => navigation.navigate('Login') }>
                        <Text style={styles.textoLogout}>Deslogar</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    areaHome:{
        borderWidth: 5,
        borderColor: '#cf1212',
        margin: 10,
        padding: 10,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: "center"
    },
    textoHome:{
        fontSize: 15,

    },
    btnLogout:{
        backgroundColor: "#191919",
        borderRadius: 5,
    },
    textoLogout:{
        textAlign: "center",
        color: "#FFF",
        fontSize: 20,
        padding: 5,
    },
});