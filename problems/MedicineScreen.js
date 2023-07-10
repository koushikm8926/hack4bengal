import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const MedicineScreen = () => {
    const navigation = useNavigation();
  return (
    <>
    <ScrollView style={{marginTop:40, marginLeft:20}}>
      <Text style={{fontSize:24, fontWeight:500}} >What Are Medicines?</Text>
      <Text style={{fontSize:17, padding:7}} >Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms; or help in the diagnosis of illnesses. Advances in medicines have enabled doctors to cure many diseases and save lives.
            These days, medicines come from a variety of sources. Many were developed from substances found in nature, and even today many are extracted from plants.
            Some medicines are made in labs by mixing together a number of chemicals. Others, like penicillin, are byproducts of organisms such as fungus. And a few are even biologically engineered by inserting genes into bacteria that make them produce the desired substance.</Text> 
       <Text style={{fontSize:21, fontWeight:500}}>When we think about taking medicines, we often think of pills. But medicines can be delivered in many ways, such as:</Text>
       <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  liquids that are swallowed </Text>
       <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  drops that are put into ears or eyes </Text>
       <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  creams, gels, or ointments that are rubbed onto the skin </Text>
       <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  inhalers (like nasal sprays or asthma inhalers) </Text>
       <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  injections (shots) or intravenous (inserted into a vein) medicines </Text>
    
    <Pressable onPress={ () => navigation.navigate("Chat") } style={{
            height:60, 
            width:80, 
            backgroundColor:"#d8e2f8",
            marginTop:20, 
            marginLeft:250,  
            padding:9, 
            alignItems:"center", 
            borderBottomStartRadius:70, 
            borderTopRightRadius:70, 
            borderTopLeftRadius:70 
        }} >
            <FontAwesome5 name="robot" size={34} color="#4d7cd9" />
        </Pressable>
        </ScrollView>
    </>
  )
}

export default MedicineScreen

const styles = StyleSheet.create({})