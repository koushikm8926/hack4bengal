import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:"#e2414c", height:1000}} >
      <StatusBar />
      <View style={{ marginTop:200, marginLeft:130}}>
      <Fontisto name="blood-drop" size={200} color="white" />

      </View>
      <Pressable onPress={() => navigation.navigate("Login")} style={{height:50, width:350, backgroundColor:"white", marginTop:230, marginLeft:20, borderRadius:10, }} >
        <Text style={{textAlign:"center",fontSize:20, fontWeight:"bold", color:"#e2414c", padding:10}} >Sign In</Text>
      </Pressable>
      
      <Pressable onPress={() => navigation.navigate("Register")} style={{height:50, width:350, marginTop:10, marginLeft:20, borderRadius:10, borderColor:"white", borderWidth:1, }} >
        <Text style={{textAlign:"center",fontSize:20, fontWeight:"bold", color:"#e2414c", padding:10, color:"white"}} >Create New Account</Text>
      </Pressable>
      
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({})