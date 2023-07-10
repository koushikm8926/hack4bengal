import {StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import BloodOptions from '../screens/BloodOptions';
import DonateBlood from '../screens/DonateBlood';
import RequestBlood from '../screens/RequestBlood';
import DoctorScreen from '../screens/DoctorScreen';
import OrthoScreen from '../problems/OrthoScreen';
import CardioScreen from '../problems/CardioScreen';
import Emergency from '../screens/EmergencyScreen';
import MedicineScreen from '../problems/MedicineScreen';
import GastroScreen from '../problems/GastroScreen';
import DentalScreen from '../problems/DentalScreen';
import LandingScreen from '../screens/LandingScreen';



const ScreenNavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name='Landing' component={LandingScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name='donate' component={DonateBlood} options={{ headerShown: false }}  />
        <Stack.Screen name='request' component={RequestBlood} options={{ headerShown: false }}  />
        <Stack.Screen name='ortho' component={OrthoScreen} options={{headerShown:false}} />
        <Stack.Screen name='Cardio' component={CardioScreen} options={{headerShown:false}} />
        <Stack.Screen name='Gastro' component={GastroScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Dental' component={DentalScreen} options={{headerShown: false}} />
        <Stack.Screen name='Medicine' component={MedicineScreen} options={{headerShown:false}} />
        <Stack.Screen name='emergency' component={Emergency} options={{headerShown:false}} />
        <Stack.Screen name='Doctor' component={DoctorScreen} options={{headerShown:false}}/>
        <Stack.Screen name='blood' component={BloodOptions} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigator

const styles = StyleSheet.create({})