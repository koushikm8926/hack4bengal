import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const DentalScreen = () => {
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

    </ScrollView>
  )
}

export default DentalScreen

const styles = StyleSheet.create({})