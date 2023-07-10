import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
const HomeScreen = () => {

    const data = [
       
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
            id:"1",
            name:"Dr. Gagandeep",
            image:"https://th.bing.com/th/id/OIP.0F2VgQsf-1S410g0ZYQB-gHaKX?pid=ImgDet&w=1000&h=1400&rs=1",
            rating:"4.5",
            designation:"Gynaecogolist",
            experience:"4 years",
            fees:"400$",
            },
        
          
        ]

    const navigation = useNavigation();
  return (
    <>
   
    <ScrollView>

        <View style={{marginTop:30, marginLeft:20, }}>
        <Text style={{fontSize:25, fontWeight:500, color:'#e2414c' }} >Find your</Text>
        <Text style={{fontSize:25, fontWeight:500 , color:'#e2414c'}} >Health Solutions!</Text>
        </View>

        <View style={{ flexDirection:"row", margin:14 }} >
            <Pressable onPress={()=>navigation.navigate("Doctor")} style={{height:140, width:100, alignItems:"center", justifyContent:"center", backgroundColor:"#009688", borderRadius:20, margin:10 }} >
                
                    <Fontisto name="doctor" size={44} color="white" />
                    <Text style={{color:"white", fontSize:17, marginTop:20}} >Doctor</Text>
                
            </Pressable>

            <Pressable onPress={()=>navigation.navigate("blood")} style={{height:140, width:100, alignItems:"center", justifyContent:"center", backgroundColor:"#feddda", borderRadius:20, margin:10 }} >
                
                    <MaterialCommunityIcons name="blood-bag" size={44} color="#f1938c" />
                    <Text style={{color:"#f1938c", fontSize:17, marginTop:20}} >Blood</Text>
                
            </Pressable>

            <Pressable onPress={()=> navigation.navigate("emergency")} style={{height:140, width:100, alignItems:"center", justifyContent:"center", backgroundColor:"#d8e2f8", borderRadius:20, margin:10 }} >
                
                    <FontAwesome5 name="ambulance" size={44} color="#4d7cd9" />
                    <Text style={{color:"#4d7cd9", fontSize:17, marginTop:20}} >Ambulance</Text>
                
            </Pressable>
        </View>

        <View style={{marginLeft:20}} >
            <Text style={{fontSize:23, color:'#e2414c', fontWeight:'600'}} >Common Health Problem</Text>
            <View style={{borderColor:'#e2414c',borderWidth:1,width:350,marginTop:5,}}/>
            <View style={{flexDirection:"row", flexWrap:"wrap", marginTop:15 }} >
                <Pressable onPress={()=>navigation.navigate("ortho")} style={{height:40, width:120, backgroundColor:"#ece7f6",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"black", }} >Orthopaedics</Text>
                </Pressable>

                <Pressable onPress={()=>navigation.navigate("Cardio")} style={{height:40, width:120, backgroundColor:"#faf0f1",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"black"}} >Cardiology</Text>
                </Pressable>

                <Pressable onPress={()=>navigation.navigate("Gastro")} style={{height:40, width:150, backgroundColor:"#e6f4f2",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"black"}} >Gastroenterology</Text>
                </Pressable>

                <Pressable onPress={()=>navigation.navigate("Dental")} style={{height:40, width:100, backgroundColor:"#e7e7f5",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"black"}} >Dental</Text>
                </Pressable>

                <Pressable onPress={()=>navigation.navigate("Medicine")} style={{height:40, width:100, backgroundColor:"#e7e7f5",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"black"}} >Medicine</Text>
                </Pressable>

                <Pressable style={{height:40, width:120, backgroundColor:"#faf0f1",  padding:6, borderRadius:10, margin:5}} >
                    <Text style={{fontSize:17, textAlign:"center", color:"black"}} >Dermatology</Text>
                </Pressable>
                
            </View>

<View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
      <Pressable style={{ marginHorizontal:10, flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#d0d0d0', padding:10, borderRadius:20, justifyContent:'center',  width:120}}>
        <Text style={{marginRight:6}}>Filter</Text>
        <Ionicons name="filter" size={20} color="black" />
      </Pressable>

      <Pressable style={{ marginHorizontal:10, flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#d0d0d0', padding:10, borderRadius:20, justifyContent:'center', width:120}}>
        <Text>Sort By Name</Text>

      </Pressable>

      <Pressable style={{ marginHorizontal:10, flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#d0d0d0', padding:10, borderRadius:20, justifyContent:'center', width:120}}>
        <Text>Sort By Fees</Text>
      </Pressable>
</View>
        </View>


<Text style={{padding:10,fontSize:20, color:'#e2414c', fontWeight:'bold', marginLeft:10,}}>Wellknown Doctors</Text>
<View style={{borderColor:'#e2414c',borderWidth:1,width:350,marginLeft:20,}}/>



<View style={{marginTop:10,}}>
{data.map((item, index)=>(
    <View key={index} style={{marginLeft:10,height:120,flexDirection:'row',margin:10,borderBottomColor:'#e2414c', borderBottomWidth:4,borderRadius:7,borderRightColor:"#e2414c", borderRightWidth:2,borderLeftColor:'#e2414c', borderLeftWidth:2,borderRadius:10,}} >
        <Image style={{height:80, width:80,borderRadius:7,marginLeft:10,marginTop:10,}} source={{uri:item.image}} />
        
        <View style={{marginLeft:10,flexDirection:'column'}}>
            <View style={{flexDirection:'row',}}> 
                 <Text style={{fontSize:20,fontWeight:'500'}}>{item.name}</Text>

                 <View style={{flexDirection:'row',}}>
                        <Text style={{fontSize:20, fontWeight:'300', marginLeft:20,}}>{item.rating}</Text>
                        <AntDesign name="star" size={17} color="orange" style={{marginLeft:5,marginTop:5,}} />
                 </View>   
            
            </View>
            <Text style={{fontSize:16,}}>{item.designation}</Text>
            <Text style={{fontSize:16,}}>Experience {item.experience} </Text>
            <Text>Fees {item.fees}</Text>
        </View>

    </View>
))}
</View>



        
        </ScrollView>

    
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    Pressable:{
        height:140, 
        width:100, 
        alignItems:"center", 
        justifyContent:"center", 
        backgroundColor:"#1abc9b", 
        borderRadius:20, 
        margin:10 
    },

        Pressable1:{
            height:60, 
            width:80, 
            backgroundColor:"#d8e2f8", 
            marginTop:180, 
            marginLeft:280,  
            padding:9, 
            alignItems:"center", 
            borderBottomStartRadius:70, 
            borderTopRightRadius:70, 
            borderTopLeftRadius:70 
        }
})