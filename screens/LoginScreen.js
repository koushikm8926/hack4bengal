import { Pressable, StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config';

const LoginScreen = () => {
    const navigation= useNavigation();
    const [loading,setLoading]= useState(false);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
  
    useEffect(()=>{
      setLoading(true);
      const unsubscribe =auth.onAuthStateChanged((authUser)=>{
        if(!authUser){
          setLoading(false);
        }
        if(authUser){
          navigation.replace("Home")
        }
      });
      return unsubscribe;
    },[])
  
    const login = ()=> {
      signInWithEmailAndPassword(auth,mail,password).then((userCredentials)=> {
        console.log("user credential",userCredentials);
        const user = userCredentials.user;
        console.log("user details", user);
      })
    }
  return (
    <KeyboardAvoidingView>
    <View style={{backgroundColor:"#e2414c", height:180, borderBottomLeftRadius:180, borderBottomRightRadius:180}} ></View>
        <View style={{marginTop:50}}>
          <Text style={{color:"#e2414c",  textAlign:"center", fontSize:20, fontWeight:500}} >Login</Text>
          
          <View style={{justifyContent:"center", alignItems:"center", marginTop:70}}>
              <TextInput placeholder='Enter Your Mail-id' style={styles.TextInput} />
              <TextInput placeholder='Enter Your Password' style={styles.TextInput} />
              
          </View>

          <View style={{marginTop:30, justifyContent:'center', alignItems:'center'}}>
                  <Pressable onPress={login} style={{backgroundColor:'#e2414c', width:350,height:50,borderRadius:12,alignContent:'center', justifyContent:'center'}}>
                      <Text style={{fontSize:16,fontWeight:'bold', color:'white', alignItems:'center', textAlign:'center'}}>Login</Text>
                  </Pressable>
          </View>

          <View style={{flexDirection:'row',  justifyContent:"center", alignItems:"center", marginTop:20, }}>
            <Text style={{fontSize:16}} >Already have an account</Text>
              <Pressable style={{marginLeft:10, }} onPress={() => navigation.navigate("Register")}>
                <Text style={{color:"#e2414c", fontSize:16}} >Register</Text>
              </Pressable>
          </View>

        </View>

      </KeyboardAvoidingView>
  )
}

export default LoginScreen

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