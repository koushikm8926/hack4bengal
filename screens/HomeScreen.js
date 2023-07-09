import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <>
   
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
                
                    <FontAwesome5 name="ambulance" size={44} color="#4d7cd9" />
                    <Text style={{color:"#4d7cd9", fontSize:17, marginTop:20}} >Ambulance</Text>
                
            </Pressable>
        </View>

        <View style={{marginLeft:20}} >
            <Text style={{fontSize:23, }} >Common Health Problem</Text>
            <View style={{flexDirection:"row", flexWrap:"wrap", marginTop:15 }} >
                <Pressable style={{height:40, width:120, backgroundColor:"#ece7f6",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"#8c88a9"}} >Orthopaedics</Text>
                </Pressable>

                <Pressable style={{height:40, width:120, backgroundColor:"#faf0f1",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"#a6a1b7"}} >Cardiology</Text>
                </Pressable>

                <Pressable style={{height:40, width:150, backgroundColor:"#e6f4f2",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"#929bae"}} >Gastroenterology</Text>
                </Pressable>

                <Pressable style={{height:40, width:100, backgroundColor:"#e7e7f5",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"#9a9ab9"}} >Dental</Text>
                </Pressable>

                <Pressable style={{height:40, width:100, backgroundColor:"#e7e7f5",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"#9a9ab9"}} >Medicine</Text>
                </Pressable>

                <Pressable style={{height:40, width:120, backgroundColor:"#faf0f1",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"#a6a1b7"}} >Dermatology</Text>
                </Pressable>
                
            </View>
        </View>
    </View>
        <Pressable onPress={ () => navigation.navigate("Chat") } style={{height:60, width:80, backgroundColor:"#d8e2f8", marginTop:180, marginLeft:280,  padding:9, alignItems:"center", borderBottomStartRadius:70, borderTopRightRadius:70, borderTopLeftRadius:70 }} >
            <FontAwesome5 name="robot" size={34} color="#4d7cd9" />
        </Pressable>
    </>
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