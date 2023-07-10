import { StyleSheet, Text, View ,FlatList, SafeAreaView, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
// import firestore from '@react-native-firebase/firestore';
// import {firebase} from "../config";
// import { Firestore, QuerySnapshot, doc, query } from 'firebase/firestore'
// import { db } from '../config';




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
    // const [name,setName]=useState([]);
    // const BloodRequest = firebase.firestore().collection('BloodRequest');
    // useEffect(async()=>{
    //     BloodRequest
    //     .onSnapshot(
    //         querySnapshot =>{
    //             const users =[]
    //             querySnapshot.forEach((doc)=>{
    //                 const {address,age,fname,group,pin}= doc.data()
    //                 users.push({
    //                     id:doc.id,
    //                     address,
    //                     age,
    //                     fname,
    //                     group,
    //                     pin,

    //                 })
    //             })
    //             setUsers(users)
    //         }
    //     )
    // },[])

  return (
    <SafeAreaView style={{marginTop:Platform.OS === "android" ? 50:0,}} >
      <Text style={{fontSize:20, textAlign:'center',fontWeight:'bold', color:"#5180da"}}>Select your Doctor</Text>
      <ScrollView>
        {data.map((item,index)=>(

          <ScrollView key={index} style={{padding:10, bottom:15,  }}>
              <View style={{backgroundColor:'#C5C6D0',padding:10,borderRadius:7,flexDirection:'row', marginTop:10}}>
                  
                <View style={{marginLeft:12,}}>
                       <Text style={{fontSize:18, fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                       <Text>{item.age}</Text>
                       <View style={{flexDirection:'row'}}>
                          <Text>{item.group}</Text>
                          <Text style={{color:'green'}}>     {item.pin}</Text>
                       </View>
                </View>
              </View>

              
             
          </ScrollView>

          
        ))}
      </ScrollView>
    
    </SafeAreaView>
  )
}

export default DonateBlood

const styles = StyleSheet.create({})