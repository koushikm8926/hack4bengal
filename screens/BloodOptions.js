import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const BloodOptions = () => {

    const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor:"white", height:1000}}>

      <StatusBar/>


      <View>
      <View style={{ marginTop:200, marginLeft:130}} >
      <Fontisto name="blood-drop" size={200} color="#e2414c" />
      </View>

      <View style={{ marginTop:-120, marginLeft:30}} >
      <Fontisto name="blood-drop" size={200} color="pink" />
      </View>

      <View style={{ marginTop:-190, marginLeft:225}} >
      <Fontisto name="blood-drop" size={200} color="pink" />
      </View>

      </View>
    <View style={{justifyContent:'center',alignContent:'center',marginTop:30, }}>
      <View style={{alignContent:'center',justifyContent:'center'}}>

         <Pressable onPress={()=>navigation.navigate("donate")}  style={{height:120, width:350, backgroundColor:"#e2414c", borderRadius:20, marginLeft:10,  alignItems:"center", justifyContent:"center" }} > 
            <View style={{flexDirection:"row", height:50, width:170, backgroundColor:"white", borderRadius:10}} >
                <MaterialCommunityIcons name="blood-bag" size={44} color="#e2414c" />
                <Text style={{color:"#e2414c", fontSize:17, marginTop:20}} >Donate Blood</Text>
              
              </View>          
        </Pressable>

        <Pressable onPress={()=> navigation.navigate("request")} style={{height:120, width:350, alignItems:"center", justifyContent:"center", backgroundColor:"#e2414c", borderRadius:20, marginLeft:10, marginTop:10 }} >               
        <View style={{flexDirection:"row", height:50, width:170, backgroundColor:"white", borderRadius:10}} >
                <MaterialCommunityIcons name="blood-bag" size={44} color="#e2414c" />
                <Text style={{color:"#e2414c", fontSize:17, marginTop:20}} >Request Blood</Text>
              
              </View>        
        </Pressable>

      </View>
    </View>

      
    </SafeAreaView>
  )
}

export default BloodOptions

const styles = StyleSheet.create({})