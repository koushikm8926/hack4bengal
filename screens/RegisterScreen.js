import { StyleSheet, Text, View,  SafeAreaView,TextInput, Pressable, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db } from '../config';
import { auth } from '../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterScreen = () => {
     
  const[fname,setFname]= useState();
  const[mail, setMail]= useState();
  const[number, setNumber]=useState();
  const [password, setPassword] = useState("");
  // function create(){
  //   addDoc(collection(db, "User Details"), {
  //     fname: fname,
  //     mail:mail,
  //     number:number,
  //   }).then(()=>{
  //     console.log("data submitted")
  //     navigation.navigate("Home")
  //   }).catch((error)=>{
  //     console.log(error)
  //   });
  // }


  const register = ()=>{
   
    if (mail === "" || number ==="" || password === "" ){
      Alert.alert('Invalid Details', 'Please fill all the details ', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    createUserWithEmailAndPassword(auth,mail,password).then((userCredential)=>{
      console.log("user credential",userCredential);
      const user = userCredential._tokenResponse.email;
      const myUserUid = auth.currentUser.uid;

      setDoc(doc(db,"users",`${myUserUid}`),{
        mail:user,
        number:number
      })
    })

    addDoc(collection(db, "User Details"), {
      fname: fname,
      mail:mail,
      number:number,
    }).then(()=>{
      console.log("data submitted")
      navigation.navigate("Home")
    }).catch((error)=>{
      console.log(error)
    });
  }

const navigation= useNavigation();
  return (
    <View>
      
      <View style={{backgroundColor:"#e2414c", height:180, borderBottomLeftRadius:180, borderBottomRightRadius:180}} ></View>
          <View style={{marginTop:30}}>
            <Text style={{color:"#e2414c",  textAlign:"center", fontSize:20, fontWeight:500}} >Register</Text>
            
            <View style={{justifyContent:"center", alignItems:"center", marginTop:10}}>
                <TextInput placeholder='Enter Your Name' style={styles.TextInput} value={fname}  onChangeText={(text)=>setFname(text)}/>
                <TextInput placeholder='Enter Mail Id' style={styles.TextInput} value={mail} onChangeText={(text)=>setMail(text)} />
                <TextInput placeholder='Enter Mobile No.' style={styles.TextInput} value={number} onChangeText={(number)=> setNumber(number)} keyboardType='numeric' />
                <TextInput placeholder='Enter Password' style={styles.TextInput} secureTextEntry />
                <TextInput placeholder='Confirm Password' style={styles.TextInput} secureTextEntry />
            </View>

            <View style={{marginTop:30, justifyContent:'center', alignItems:'center'}}>
                    <Pressable onPress={register} style={{backgroundColor:'#e2414c', width:350,height:50,borderRadius:12,alignContent:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'bold', color:'white', alignItems:'center', textAlign:'center'}}>Register</Text>
                    </Pressable>
            </View>

            <View style={{flexDirection:'row',  justifyContent:"center", alignItems:"center", marginTop:20, }}>
              <Text style={{fontSize:16}} >Already have an account</Text>
                <Pressable style={{marginLeft:10, }} onPress={() => navigation.navigate("Login")}>
                  <Text style={{color:"#e2414c", fontSize:16}} >Login</Text>
                </Pressable>
            </View>

          </View>

        </View>
            
  
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  TextInput:{
    marginTop:10,
    height:50, 
    width:350, 
    borderColor:"#e2414c", 
    borderWidth:1, 
    borderRadius:12, 
    padding:10, 
    
    
  }
})