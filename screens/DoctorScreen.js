import { StyleSheet, Text, View, SafeAreaView, Platform, Image, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const DoctorScreen = () => {
  const data = [
    {
    id:"0",
    name:"Dr. Hemant Singh",
    image:"https://th.bing.com/th/id/OIP.KnnEOurT2Qq-6NNDlPbD5wHaLF?pid=ImgDet&rs=1",
    rating:"4.8",
    designation:"Dentist",
    experience:"10 years",
    fees:"100$",
    },
    
    {
    id:"1",
    name:"Dr. Gagandeep",
    image:"https://th.bing.com/th/id/OIP.0F2VgQsf-1S410g0ZYQB-gHaKX?pid=ImgDet&w=1000&h=1400&rs=1",
    rating:"4.5",
    designation:"Gynaecogolist",
    experience:"10 years",
    fees:"100$",
    },
    
    {
    id:"2",
    name:"Dr. Koushik Mondal",
    image:"https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:best,w_975/v1/yms/prod/004102ee-ee49-4f3f-a17f-0f3a6ec25a7b",
    rating:"4.2",
    designation:"Dentist",
    experience:"10 years",
    },
    
    {
    id:"3",
    name:"Dr. Mohit Singh",
    image:"https://th.bing.com/th/id/OIP.KnnEOurT2Qq-6NNDlPbD5wHaLF?pid=ImgDet&rs=1",
    rating:"3.9",
    designation:"Cardiologists",
    experience:"10 years",
    fees:"100$",
    },
    
    {
    id:"4",
    name:"Dr. Sonam Yadav",
    image:"https://th.bing.com/th/id/OIP.KnnEOurT2Qq-6NNDlPbD5wHaLF?pid=ImgDet&rs=1",
    rating:"3.4",
    designation:"Veterinarian",
    experience:"10 years",
    fees:"100$",
    },
    
    {
    id:"5",
    name:"Dr. Priya Kaur",
    image:"https://th.bing.com/th/id/OIP.KnnEOurT2Qq-6NNDlPbD5wHaLF?pid=ImgDet&rs=1",
    rating:"3.8",
    designation:"Gynaecogolist",
    experience:"10 years",
    fees:"100$",
    },
    
    {
    id:"6",
    name:"Dr. Mayank Gupta",
    image:"https://th.bing.com/th/id/OIP.0F2VgQsf-1S410g0ZYQB-gHaKX?pid=ImgDet&w=1000&h=1400&rs=1",
    rating:"3.7",
    designation:"Veterinarian",
    experience:"10 years",
    fees:"100$",
    },
    
    {
    id:"7",
    name:"Dr. Shivam Kumar",
    image:"https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:best,w_975/v1/yms/prod/004102ee-ee49-4f3f-a17f-0f3a6ec25a7b",
    rating:"4.1",
    designation:"Orthopedic Surgeon",
    experience:"10 years",
    fees:"100$",
    },
    
    {
    id:"8",
    name:"Dr. Rahul Sharma",
    image:"https://th.bing.com/th/id/OIP.KnnEOurT2Qq-6NNDlPbD5wHaLF?pid=ImgDet&rs=1",
    rating:"3.9",
    designation:"MBBS, Oncologist",
    experience:"10 years",
    fees:"100$",
    },
    
    {
    id:"9",
    name:"Dr. Alex",
    image:"https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:best,w_975/v1/yms/prod/004102ee-ee49-4f3f-a17f-0f3a6ec25a7b",
    rating:"3.7",
    designation:"Oncologist",
    experience:"10 years",
    fees:"100$",
    },
      
    ]
  return (
    <SafeAreaView style={{marginTop:Platform.OS === "android" ? 50:0,}} >
      <Text style={{fontSize:20, textAlign:'center',fontWeight:'bold', color:"#5180da"}}>Select your Doctor</Text>
      <ScrollView>
        {data.map((item,index)=>(

          <ScrollView key={index} style={{padding:10,}}>
              <View style={{backgroundColor:'#C5C6D0',padding:10,borderRadius:7,flexDirection:'row'}}>
                  <View style={{marginLeft:7,}}>
                       <Image source={{uri:item.image}} style={{height:60, width:60,borderRadius:30,}}/>
                  </View>
                <View style={{marginLeft:12,}}>
                       <Text style={{fontSize:18, fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                       <Text>{item.designation}</Text>
                       <View style={{flexDirection:'row'}}>
                          <Text>{item.experience}</Text>
                          <Text style={{color:'green'}}>    Fees {item.fees}</Text>
                       </View>
                </View>
              </View>

              <View style={{marginTop:10,}}>
                <View style={{flexDirection:'row',justifyContent:'space-between' }}>

                  <View style={{flexDirection:'row',backgroundColor:'#00b4d8',borderRadius:7,width:"49%",justifyContent:'center', alignItems:'center'}}>
                    <Feather name="phone-call" size={24} color="black" />
                    <Text style={{fontSize:18,color:'white', marginLeft:10,}}>Call Now</Text>
                  </View>

                  <View style={{flexDirection:'row',backgroundColor:'#00b4d8',borderRadius:7,width:"49%",height:40,justifyContent:'center', alignItems:'center'}}>
                    <FontAwesome5 name="book-medical" size={24} color="black" />
                    <Text style={{fontSize:18,color:'white', marginLeft:10,}} >Book Appoinment</Text>
                  </View>
                </View>
              </View>
             
          </ScrollView>

          
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default DoctorScreen

const styles = StyleSheet.create({})