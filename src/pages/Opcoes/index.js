import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Opcoes({ user }) {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerPerfil}>
                <View style={styles.container}>                   
                    <Ionicons
                    name="person-sharp"
                    size={25}
                    />
                    
                    <Text style={styles.itensText}>Informações da conta</Text>
                    <Text style={styles.itensText}>Nome: Váriavel com o nome cadastrado </Text>
                    <Text style={styles.itensText}>Email logado: {user.authUser && user.authUser.email} </Text>
                    
                </View>
            </View>

            <View style={styles.containerItens}>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <View style={styles.itensBtn}>
                            <Ionicons
                            name='people-circle-outline'
                            size={25}
                            />
                            <Text style={styles.itensText}>Amigos</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>    
                        <View style={styles.itensBtn}>
                            <Ionicons
                            name='chatbubble-ellipses-outline'
                            size={25}
                            />
                            <Text style={styles.itensText}>Comentários</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style={styles.itensBtn}>
                            <Ionicons
                            name='share-social-outline'
                            size={25} 
                            />
                            <Text style={styles.itensText}>Compartilhamentos</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>    
                        <View style={styles.itensBtn}>
                            <Ionicons
                            name='ban-outline'
                            size={25}
                            />
                            <Text style={styles.itensText}>Bloqueados</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            
            <View style={styles.containerItens}>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <View style={styles.itensBtn}>
                            <Ionicons
                            name='information-circle-outline'
                            size={25}
                            />
                            <Text style={styles.itensText}>Sobre</Text>
                        </View>                  
                    </TouchableOpacity>

                    <TouchableOpacity>    
                        <View style={styles.itensBtn}>
                            <Ionicons
                            name='help-circle-outline'
                            size={25}
                            />
                            <Text style={styles.itensText}>Ajuda</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.btnLogout}
                        onPress={ () => navigation.navigate('Login') }>
                            <Text style={styles.textoLogout}>Deslogar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    //CONTAINER
    containerItens:{
        marginTop: 2,
        marginLeft: 5,
        padding: 5,
        borderBottomWidth: 1
    },
    containerPerfil:{
        marginTop: 25,
        marginLeft: 5,
        padding: 5,
        borderBottomWidth: 1
    },

    //BOTÕES
    itensBtn:{
        flexDirection:'row',
        paddingTop: 3,
        paddingRight: 0,
        paddingBottom: 3,
        paddingLeft: 0,
        gap: 3,
        alignItems:"center",
        marginBottom: 1,
    },

    //TEXTO
    itensText:{
        fontSize: 18,
        fontWeight: '500',
    },

    //LOGOUT
    btnLogout:{
        margin: 3,
        backgroundColor: "#191919",
        borderRadius: 5,
    },
    textoLogout:{
        textAlign: "center",
        color: "#FFF",
        fontSize: 20,
        padding: 5,
    },
})