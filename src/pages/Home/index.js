import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../Header";
import Feed from "../Feed";


import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Home(){
    const navigation = useNavigation();

    return(
        <>
            <Header/>
            <Feed/>
        </>
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