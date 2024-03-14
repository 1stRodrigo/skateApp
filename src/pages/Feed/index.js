import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

export default function Feed(){
    return(
        <View>
            <View style={styles.viewPerfil}>
                <Text>Aqui talvez adicionar uma image pra foto de perfil do user</Text>
                <Text>Usuário: </Text>
            </View>


            <Text>Lista Feed</Text>
            <Text>Vai conter: Imagem, Descrição e Nome de usuário</Text>
            <Text>Usário: </Text>
            <Text>Depois testar colocar uma Image aqui</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFA",
    },
})