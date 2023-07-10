import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const OrthoScreen = () => {
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

      
    </ScrollView>
  )
}

export default OrthoScreen

const styles = StyleSheet.create({})