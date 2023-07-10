import { Platform, StyleSheet, Text,View} from 'react-native'
import React from 'react'

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
    <View style={{marginTop:Platform.OS=== "android" ? 50 : 0 ,}}>
      <Text>DonateBlood</Text>
    </View>
  )
}

export default DonateBlood

const styles = StyleSheet.create({})