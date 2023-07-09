import { StyleSheet, Text, View , SafeAreaView, Platform, TextInput} from 'react-native'
import React from 'react'

const RequestBlood = () => {
  return (
    <SafeAreaView style={{marginTop:Platform.OS === "android" ? 50 :0,}}>
      <Text style={{fontSize:20, textAlign:'center',fontWeight:'bold'}}>Blood Request Page</Text>
     
     <View style={{alignItems:'center', justifyContent:'center', marginTop:30,}}>
      <TextInput placeholder='Name of the patient' style={{ width:'80%',borderRadius:7,height:50,borderBottomColor:"black", borderWidth:1,}} />
     
     </View>
    
    </SafeAreaView>
  )
}

export default RequestBlood

const styles = StyleSheet.create({})