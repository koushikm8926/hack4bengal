import { StyleSheet, Text, View ,FlatList, Platform, TextInput, ScrollView, Pressable,} from 'react-native'
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
    phone:"7384810162",
    address:"Phulia, Nadia, West-Bengal",
    },
    
    {
    name:"Gagandeep Singh",
    age:"21",
    pin:"802220",
    group:"O+",
    phone:"7384810162",
    address:"Samahuta, Rohats, Bihar",
    },
    
    {
    name:"Prince Maurya",
    age:"19",
    pin:"802219",
    phone:"7384810162",
    group:"B+",
    address:"Rajpur, Rohats, Bihar",
    },
    
    {
    name:"Badal Kumar",
    age:"22",
    pin:"800410",
    group:"O-",
    phone:"7384810162",
    address:"Myko, Bhojpur, Bihar",
    },
    
    {
    name:"Avinash Kumar",
    age:"17",
    pin:"144411",
    group:"A+",
    phone:"7384810162",
    address:"Phagwara, Kapurthala, Punjab ",
    },
    
    ]
  return (
    <ScrollView style={{marginTop:Platform.OS === "android" ? 20:0,}}>
          <View>
           
           <View style={{justifyContent:'center', alignItems:'center', marginTop:20,}}>
            <TextInput placeholder='Search your preferable doctor' placeholderTextColor="grey" style={{height:50, borderRadius:7, width:380,  borderWidth:1, borderColor:'#e2414c', backgroundColor:'white'}}/>
            </View> 

<ScrollView style={{margin:10,}}>
{data.map((item,index)=>(
    <ScrollView key={index} style={{backgroundColor:'#e2414c',marginTop:10,borderRadius:10,padding:10,}}>
     <View style={{flexDirection:'row'}}>
      <View>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold' }} >{item.name}</Text>
        <Text style={{color:'white', fontSize:17,}}>{item.age}</Text>
        <Text style={{color:'white',fontSize:17, }}>{item.pin}</Text>
        <Text style={{color:'white', fontSize:17,}}>{item.group}</Text>
        <Text style={{color:'white',fontSize:17, }} >{item.address}</Text>
      </View>
      
      <View style={{height:30,width:100,borderColor:'white', borderWidth:1,backgroundColor:'white', borderRadius:10,alignItems:'center',position:'absolute', right:20,}}>
        <Pressable style={{justifyContent:'center', alignItems:'center',}}>
          <Text style={{color:'#e2414c', fontWeight:'bold'}}>DONATE NOW</Text>
        </Pressable>
      </View>

    </View>
    </ScrollView>
))}
</ScrollView>






          </View>    
     </ScrollView>
  )
}

export default DonateBlood

const styles = StyleSheet.create({})