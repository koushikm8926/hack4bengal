import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const OrthoScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{marginTop:40, marginLeft:20}}>
      <Text style={{fontSize:24, fontWeight:500}} >What is orthopedics, and what do orthopedists do?</Text>
      <Text style={{fontSize:17, padding:7}} >Orthopedics focuses on treating the musculoskeletal system. This system comprises muscles, bones, joints, ligaments, and tendons. A person who specializes in orthopedics is known as an orthopedist</Text>

      <Text style={{fontSize:24, fontWeight:500}} >What do orthopedists treat?</Text>

      <Text style={{fontSize:17, padding:7}}>Orthopedists treat a wide variety of musculoskeletal conditions. These conditions may be present from birth, or they may result from an injury or age-related wear and tear.
        Below are some of the most common conditions that an orthopedist may treat:</Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  joint pain from arthritis </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  bone fractures </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  shoulder pain and problems, such as bursitis </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  back pain </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  carpal tunnel syndrome </Text>

      <Text style={{fontSize:24, fontWeight:500}} >Treatment options</Text>

      <Text style={{fontSize:17, padding:7}}>In addition to in-office treatments, a person’s orthopedist may recommend one or more of the following to treat chronic musculoskeletal conditions:</Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  rehabilitation and physical therapy </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  home exercise programs </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  injections </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  acupuncture </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  mobility aids </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  surgery, when other treatments fail </Text>


      <Pressable onPress={ () => navigation.navigate("Chat") } style={{
            height:60, 
            width:80, 
            backgroundColor:"#d8e2f8",
            marginTop:50, 
            marginLeft:250,  
            padding:9, 
            bottom:15,
            alignItems:"center", 
            borderBottomStartRadius:70, 
            borderTopRightRadius:70, 
            borderTopLeftRadius:70 
        }} >
            <FontAwesome5 name="robot" size={34} color="#4d7cd9" />
        </Pressable>
      
    </ScrollView>
  )
}

export default OrthoScreen

const styles = StyleSheet.create({})