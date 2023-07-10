import { StyleSheet, Text, View ,FlatList,} from 'react-native'
import React, { useEffect, useState } from 'react'
// import firestore from '@react-native-firebase/firestore';
// import {firebase} from "../config";
// import { Firestore, QuerySnapshot, doc, query } from 'firebase/firestore'
// import { db } from '../config';
// import {firestore} from "../config";



const DonateBlood = () => {
    const [name,setName]=useState([]);
    const BloodRequest = firebase.firestore().collection('BloodRequest');
    useEffect(async()=>{
        BloodRequest
        .onSnapshot(
            querySnapshot =>{
                const users =[]
                querySnapshot.forEach((doc)=>{
                    const {address,age,fname,group,pin}= doc.data()
                    users.push({
                        id:doc.id,
                        address,
                        age,
                        fname,
                        group,
                        pin,

                    })
                })
                setUsers(users)
            }
        )
    },[])
  return (
    <View style={{}}>
      <Text>DonateBlood</Text>
    </View>
  )
}

export default DonateBlood

const styles = StyleSheet.create({})