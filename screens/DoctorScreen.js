import { StyleSheet, Text, View, SafeAreaView, Platform, Image, ScrollView, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
const DoctorScreen = () => {
  const navigation =useNavigation();
  const data = [
    {
    id:"0",
    name:"Dr. Prince Singh",
    image:"https://th.bing.com/th/id/OIP.KnnEOurT2Qq-6NNDlPbD5wHaLF?pid=ImgDet&rs=1",
    rating:"4.8",
    designation:"Dentist",
    experience:"2 years",
    fees:"150$",
    },
    
    {
    id:"1",
    name:"Dr. Gagandeep",
    image:"https://th.bing.com/th/id/OIP.0F2VgQsf-1S410g0ZYQB-gHaKX?pid=ImgDet&w=1000&h=1400&rs=1",
    rating:"4.5",
    designation:"Gynaecogolist",
    experience:"4 years",
    fees:"400$",
    },
    
    {
    id:"2",
    name:"Dr. Koushik Mondal",
    image:"https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:best,w_975/v1/yms/prod/004102ee-ee49-4f3f-a17f-0f3a6ec25a7b",
    rating:"4.2",
    designation:"Dentist",
    experience:"5 years",
    fees:"200$"
    },
    
    {
    id:"3",
    name:"Dr. Mohit Singh",
    image:"https://th.bing.com/th/id/OIP.KnnEOurT2Qq-6NNDlPbD5wHaLF?pid=ImgDet&rs=1",
    rating:"3.9",
    designation:"Cardiologists",
    experience:"6 years",
    fees:"170$",
    },
    
    {
    id:"4",
    name:"Dr. Sonam Yadav",
    image:"https://clinicaeminescu100.ro/wp-content/uploads/2019/12/p-4-300x300.jpg",
    rating:"3.4",
    designation:"Veterinarian",
    experience:"3 years",
    fees:"80$",
    },
    
    {
    id:"5",
    name:"Dr. Priya Kaur",
    image:"https://pluspng.com/img-png/png-lekarz-pani-lekarz-tlo1-271.png",
    rating:"3.8",
    designation:"Gynaecogolist",
    experience:"4 years",
    fees:"400$",
    },
    
    {
    id:"6",
    name:"Dr. Mayank Gupta",
    image:"https://th.bing.com/th/id/OIP.0F2VgQsf-1S410g0ZYQB-gHaKX?pid=ImgDet&w=1000&h=1400&rs=1",
    rating:"3.7",
    designation:"Veterinarian",
    experience:"3 years",
    fees:"80$",
    },
    
    {
    id:"7",
    name:"Dr. Shivam Kumar",
    image:"https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:best,w_975/v1/yms/prod/004102ee-ee49-4f3f-a17f-0f3a6ec25a7b",
    rating:"4.1",
    designation:"Orthopedic Surgeon",
    experience:"4.5 years",
    fees:"190$",
    },
    
    {
    id:"8",
    name:"Dr. Rahul Sharma",
    image:"https://th.bing.com/th/id/OIP.KnnEOurT2Qq-6NNDlPbD5wHaLF?pid=ImgDet&rs=1",
    rating:"3.9",
    designation:"MBBS, Oncologist",
    experience:"3.5 years",
    fees:"200$",
    },
    
    {
    id:"9",
    name:"Dr. Alex",
    image:"https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:best,w_975/v1/yms/prod/004102ee-ee49-4f3f-a17f-0f3a6ec25a7b",
    rating:"3.7",
    designation:"Oncologist",
    experience:"2 years",
    fees:"200$",
    },
      
    ]
    const appoinment = () => {
      Alert.alert('Doctors Appoinment', 'Congrats , you will be getting a notification shortly from us. Thank you', [
        {text: 'OK', onPress: () => navigation.navigate("Home")},
      ]);
    }

    const call= () => {
      Alert.alert('Oops Sorry !', 'This features is not available right now ! ', [
        {text: 'OK', onPress: () => navigation.navigate("Home")},
      ]);
    }




  return (
    <SafeAreaView style={{marginTop:Platform.OS === "android" ? 50:0,}} >
      <StatusBar/>
      <Text style={{fontSize:20, textAlign:'center',fontWeight:'bold', color:"#e2414c", }}>Search your Doctor</Text>
     
     <View style={{ justifyContent:'center', alignItems:'center', marginTop:20,}}>
      <TextInput placeholder='Search your preferable doctor' placeholderTextColor="grey" style={{height:50, borderRadius:7, width:380,  borderWidth:1, borderColor:'#e2414c', backgroundColor:'white', padding:5}}/>
     </View>


      <ScrollView style={{marginTop:10,}}>
        {data.map((item,index)=>(

          <ScrollView key={index} style={{padding:10, bottom:15,  }}>
              <View style={{padding:10,borderRadius:7,flexDirection:'row', marginTop:10,backgroundColor:'white', borderBottomColor:"#e2414c", borderBottomWidth:4, borderLeftColor:"#e2414c", borderLeftWidth:2.5, borderRightColor:"#e2414c", borderRightWidth:2.5, borderTopColor:"#e2414c", borderTopWidth:1 }}>
                  <View style={{marginLeft:7, }}>
                       <Image source={{uri:item.image}} style={{height:100, width:80,borderRadius:30,  }}/>
                  </View>
                <View style={{marginLeft:12,}}>
                       <Text style={{fontSize:18, fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                       <Text style={{fontSize:19,}}>{item.designation}</Text>
                       <View style={{flexDirection:'row'}}>
                          <Text style={{fontSize:19,}}>{item.experience}</Text>
                          <Text style={{color:'#e2414c', fontSize:19,}}>    Fees {item.fees}</Text>
                       </View>
                </View>
              </View>

              <View style={{marginTop:5,}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',  }}>


            <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:7,width:180,justifyContent:'center', alignItems:'center', borderColor:"#e2414c", borderWidth:1, height:50}}>      
                  <Animatable.View  animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"}>
                     <TouchableOpacity onPress={call}>
                        <Feather name="phone-call" size={24} color="#e2414c" />
                    </TouchableOpacity>  
                  </Animatable.View>
                    <Text style={{fontSize:18,color:'#e2414c', marginLeft:10,}}>Call Now</Text>
            </View>



                  <View style={{flexDirection:'row',backgroundColor:'#e2414c',borderRadius:7,width:180,height:50,justifyContent:'center', alignItems:'center', padding:3}}>
                  <Pressable onPress={appoinment}>
                   <FontAwesome5 name="book-medical" size={24} color="white" />
                    <Text style={{fontSize:18,color:'white', marginLeft:10,}} >Book Appoinment</Text>
                  </Pressable>
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