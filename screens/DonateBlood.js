import { StyleSheet, Text, View ,FlatList, Platform, TextInput,} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const DonateBlood = () => {
  const data = [
    {
    name:"Koushik Mondal",
    age:"20",
    pin:"741402",
    group:"O+",
    address:"Phulia, Nadia, West-Bengal",
    },
    
    {
    name:"Gagandeep Singh",
    age:"21",
    pin:"802220",
    group:"O+",
    address:"Samahuta, Rohats, Bihar",
    },
    
    {
    name:"Prince Maurya",
    age:"19",
    pin:"802219",
    group:"B+",
    address:"Rajpur, Rohats, Bihar",
    },
    
    {
    name:"Badal Kumar",
    age:"22",
    pin:"800410",
    group:"O-",
    address:"Myko, Bhojpur, Bihar",
    },
    
    {
    name:"Avinash Kumar",
    age:"17",
    pin:"144411",
    group:"A+",
    address:"Phagwara, Kapurthala, Punjab ",
    },
    ]
  return (
    <SafeAreaView style={{marginTop:Platform.OS === "android" ? 30:0,}}>
          <View>
           
           <View style={{justifyContent:'center', alignItems:'center', marginTop:20,}}>
            <TextInput placeholder='Search your preferable doctor' placeholderTextColor="grey" style={{height:50, borderRadius:7, width:380,  borderWidth:1, borderColor:'black', backgroundColor:'white'}}/>
            </View> 

<View style={{marginTop:20,margin:10,}}>
{data.map((item,index)=>(
    <View key={index} style={{backgroundColor:'#e2414c',marginTop:10,borderRadius:10,padding:10,}}>
      <View>
        <Text >{item.name}</Text>
        <Text>{item.age}</Text>
        <Text>{item.pin}</Text>
        <Text>{item.group}</Text>
        <Text>{item.address}</Text>
      </View>
    </View>
))}
</View>






          </View>    
     </SafeAreaView>
  )
}

export default DonateBlood

const styles = StyleSheet.create({})