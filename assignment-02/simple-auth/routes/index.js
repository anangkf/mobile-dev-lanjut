import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Login from '../views/Login'

const Stack = createNativeStackNavigator()

const SetupRouter = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SetupRouter