import { StyleSheet, Text, View , SafeAreaView, Platform, TextInput} from 'react-native'
import React from 'react'

const RequestBlood = () => {
  return (
    <SafeAreaView style={{marginTop:Platform.OS === "android" ? 50 :0,}}>
      <Text style={{fontSize:20, textAlign:'center',fontWeight:'bold'}}>Blood Request Page</Text>
     
     <View style={{alignItems:'center', justifyContent:'center', margin:30,}}>
      <TextInput placeholder="Patient's Name" style={{ width:350, borderRadius:7, height:50, borderColor:"black", borderWidth:1, padding:5, margin:8}} />
      <TextInput placeholder="Patient's Age" style={{ width:350, borderRadius:7, height:50, borderColor:"black", borderWidth:1, padding:5, margin:8}} />
      <TextInput placeholder="Blood Group" style={{ width:350, borderRadius:7, height:50, borderColor:"black", borderWidth:1, padding:5, margin:8}} />
      <TextInput placeholder="Address" style={{ width:350, borderRadius:7, height:70, borderColor:"black", borderWidth:1, padding:5, margin:8}} />
      <TextInput placeholder="Postal code" style={{ width:350, borderRadius:7, height:50, borderColor:"black", borderWidth:1, padding:5, margin:8}} />
     </View>
    
    </SafeAreaView>
  )
}

export default RequestBlood

const styles = StyleSheet.create({
  TextInput1:{
    
  }
})