import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View>

        <View style={{marginTop:50, marginLeft:20, }}>
        <Text style={{fontSize:25, fontWeight:500 }} >Find your</Text>
        <Text style={{fontSize:25, fontWeight:500 }} >Health Solutions!</Text>
        </View>

        <View style={{ flexDirection:"row", margin:14 }} >
            <Pressable style={{height:140, width:100, alignItems:"center", justifyContent:"center", backgroundColor:"#009688", borderRadius:20, margin:10 }} >
                
                    <Fontisto name="doctor" size={44} color="white" />
                    <Text style={{color:"white", fontSize:17, marginTop:20}} >Doctor</Text>
                
            </Pressable>

            <Pressable style={{height:140, width:100, alignItems:"center", justifyContent:"center", backgroundColor:"#feddda", borderRadius:20, margin:10 }} >
                
                    <MaterialCommunityIcons name="blood-bag" size={44} color="#f1938c" />
                    <Text style={{color:"#f1938c", fontSize:17, marginTop:20}} >Blood</Text>
                
            </Pressable>

            <Pressable style={{height:140, width:100, alignItems:"center", justifyContent:"center", backgroundColor:"#d8e2f8", borderRadius:20, margin:10 }} >
                
                    <FontAwesome5 name="ambulance" size={44} color="#a2bef0" />
                    <Text style={{color:"#a2bef0", fontSize:17, marginTop:20}} >Ambulance</Text>
                
            </Pressable>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    Pressable:{
        height:140, 
        width:100, 
        alignItems:"center", 
        justifyContent:"center", 
        backgroundColor:"#1abc9b", 
        borderRadius:20, 
        margin:10 }
})