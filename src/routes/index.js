import React from 'react';
import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabRoutes from './tabRoutes';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const Stack = createNativeStackNavigator();

export default function Routes() {

  return (
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
        name='HomeTab'
        component={TabRoutes}
        options={{
          title: 'Ínicio',
          headerShown: false,
        }}
        />

      </Stack.Navigator>
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
