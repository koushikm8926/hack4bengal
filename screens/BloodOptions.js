import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const BloodOptions = () => {

    const navigation = useNavigation();

  return (
    <SafeAreaView style={{marginTop:Platform.OS === "android" ? 50 :0}}>

    <View style={{justifyContent:'center',alignContent:'center',marginTop:300, }}>
      <View style={{flexDirection:'row', alignContent:'center',justifyContent:'center'}}>

         <Pressable onPress={()=>navigation.navigate("donate")}  style={{height:140, width:100, alignItems:"center", justifyContent:"center", backgroundColor:"#009688", borderRadius:20, margin:10 }} >           
                <MaterialCommunityIcons name="blood-bag" size={44} color="white" />
                <Text style={{color:"white", fontSize:17, marginTop:20}} >Donate Blood</Text>
        </Pressable>

        <Pressable onPress={()=> navigation.navigate("request")} style={{height:140, width:100, alignItems:"center", justifyContent:"center", backgroundColor:"#feddda", borderRadius:20, margin:10 }} >               
                    <MaterialCommunityIcons name="blood-bag" size={44} color="#f1938c" />
                    <Text style={{color:"#f1938c", fontSize:17, marginTop:20}} >Request Blood</Text>           
        </Pressable>

      </View>
    </View>

      
    </SafeAreaView>
  )
}

export default BloodOptions

const styles = StyleSheet.create({})