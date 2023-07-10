import { StyleSheet, Text, View , SafeAreaView, Platform, TextInput, Pressable} from 'react-native'
import React, { useState } from 'react'
import { addDoc, collection,  } from "firebase/firestore"; 
import { db } from '../config';
import { useNavigation } from '@react-navigation/native';
const RequestBlood = () => {

    const navigation = useNavigation();
    const [name, setName]=useState();
    const [age, setAge]= useState();
    const [pin,setPin]=useState();
    const [group, setGroup]=useState();
    const [address, setAddress]=useState();

    function bloodrequestdata(){
        addDoc(collection(db, "BloodRequest"), {
           fname:name,
           age:age,
           pin:pin,
           group:group,
           address:address,

         }).then(()=>{
            navigation.navigate("Home")
           console.log("successfully submitted")
         }).catch((error)=>{
           console.log("error")
         })
   }



  return (
    <SafeAreaView style={{marginTop:Platform.OS === "android" ? 50 :0,}}>
      <Text style={{fontSize:20, textAlign:'center',fontWeight:'bold', color:"#e2414c"}}>Blood Request Page</Text>
     
     <View style={{alignItems:'center', justifyContent:'center', margin:30,}}>
      <TextInput value={name}    onChangeText={(text)=>setName(text)}      placeholder="Patient's Name" style={styles.TextInput1} />
      <TextInput value={age}     onChangeText={(number)=>setAge(number)}  placeholder="Patient's Age" style={styles.TextInput1} />
      <TextInput value={pin}     onChangeText={(number)=>setPin(number)}  placeholder="Postal code" style={styles.TextInput1} />
      <TextInput value={group}   onChangeText={(text)=>setGroup(text)}      placeholder="Blood Group" style={styles.TextInput1} />
      <TextInput value={address} onChangeText={(text)=>setAddress(text)}      placeholder="Address" style={{ width:350, height:200, borderColor:"#a6a1b7", padding:5, margin:8, borderRadius:5, borderBottomColor:"#e2414c", borderBottomWidth:1}} />
     </View>
    
    <View style={{alignItems:'center', justifyContent:'center'}}>
        <Pressable onPress={bloodrequestdata} style={{backgroundColor:'#e2414c', width:350,height:50,borderRadius:7,alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20,fontWeight:'600'}}>Request</Text>
        </Pressable>
    </View>

    </SafeAreaView>
  )
}

export default RequestBlood

const styles = StyleSheet.create({
  TextInput1:{
    width:350, 
    height:50, 
    borderColor:"#a6a1b7", 
    padding:5, 
    margin:8,
    borderRadius:5,
    borderBottomColor:"#e2414c",
    borderBottomWidth:1
  }
})