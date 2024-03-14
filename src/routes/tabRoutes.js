import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Opcoes from "../pages/Opcoes";

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    
    const navigation = useNavigation();

    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: '#EB011D',

            tabBarStyle:{
                borderTopWidth: 0,
            }
        }}>
            <Tab.Screen
            name="Inicio"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon:({color, size}) => {
                    return <Ionicons name="home" color={color} size={size} />
                }
            }}
            />

            <Tab.Screen
            name="Perfil"
            component={Opcoes}
            options={{
                tabBarIcon: ({color, size}) => {
                    return <Ionicons name='person-circle' color={color} size={size} />
                }
            }}
            />
        </Tab.Navigator>
    )
}