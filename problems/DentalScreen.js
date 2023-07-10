import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'

const DentalScreen = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={{marginTop:40, marginLeft:20}}>
      <Text style={{fontSize:24, fontWeight:500}} >Take care of your teeth</Text>
      <Text style={{fontSize:17, padding:7}} >Achieving healthy teeth takes a lifetime of care. Even if you’ve been told that you have nice teeth, it’s crucial to take the right steps every day to take care of them and prevent problems. This involves getting the right oral care products, as well as being mindful of your daily habits.</Text>

      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Don’t go to bed without brushing your teeth</Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Brush properly </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Don’t neglect your tongue </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Use a fluoride toothpaste </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Treat flossing as important as brushing </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Don’t let flossing difficulties stop you </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Consider mouthwash</Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Drink more water</Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Eat crunchy fruits and vegetables </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  Limit sugary and acidic foods </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  See your dentist at least twice a year </Text>

      <Pressable onPress={ () => navigation.navigate("Chat") } style={{
            height:60, 
            width:80, 
            backgroundColor:"#d8e2f8",
            marginTop:100, 
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
  )
}

export default DentalScreen

const styles = StyleSheet.create({})