import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const GastroScreen = () => {
  return (
    <ScrollView style={{marginTop:40, marginLeft:20}}>
      <Text style={{fontSize:24, fontWeight:500}} >What’s a Gastroenterologist?</Text>
      <Text style={{fontSize:17, padding:7}} >Gastroenterology is an area of medicine that focuses on the health of the digestive system and the liver. Gastroenterologists can treat everything from irritable bowel syndrome (IBS) to hepatitis C.</Text>

      <Text style={{fontSize:21, fontWeight:500}} >Some possible areas of emphasis are:</Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  pancreatic disease </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  inflammatory bowel disease, or chronic inflammation of the digestive tract </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  gastrointestinal cancer </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  endoscopic surveillance </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  reflux esophagitis, which is commonly due to GERD </Text>


      <Text style={{fontSize:21, fontWeight:500}} >Health conditions gastroenterologists can diagnose and treat</Text>
      <Text style={{fontSize:17, padding:7}} >Gastroenterologists are trained to have an acute knowledge of the normal movement of food through the stomach and intestine, the absorption of nutrients, how waste is removed from the body, and how the liver helps with the digestion process. This area of expertise allows them to diagnose issues such as:</Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  gastroesophageal reflux (heartburn) </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  colon polyps </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  gastroesophageal reflux disease (GERD) </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  hepatitis </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  peptic ulcers </Text>

</ScrollView>
  )
}

export default GastroScreen

const styles = StyleSheet.create({})