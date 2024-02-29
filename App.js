import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*
import firebase from "./src/firebaseConnection";
*/

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Login'
        component={Login}
        options={{
          title: 'Entrar',
          headerShown: false,
        }}
        />
      
        <Stack.Screen
        name='Cadastro'
        component={Cadastro}
        options={{
          title: 'Criar conta',
        }}
        />
      
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Ínicio',
        }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
