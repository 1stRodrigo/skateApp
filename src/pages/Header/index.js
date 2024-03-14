import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <TouchableOpacity>
                <Text>SKATEAPP</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height: 65,
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems:'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        borderBottomWidth: 0.2,
        shadowColor: "#191919",
        elevation: 5,
    },
})