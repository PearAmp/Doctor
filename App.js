import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SmartCare from './components/home/SmartCare'
import Datadetail from './components/dtatdetail/Datadetail'
import Estimate from './components/estimate/Estimate'
import Personal from './components/homdetail/Personal'
import Professional from './components/professional/Professional'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Professional"
          component={Professional}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SmartCare"
          component={SmartCare}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Datadetail"
          component={Datadetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Estimate"
          component={Estimate}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
