import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const CardioScreen = () => {
  return (
    <ScrollView style={{marginTop:40, marginLeft:20}}>
      <Text style={{fontSize:24, fontWeight:500}} >What is cardiology?</Text>
      <Text style={{fontSize:17, padding:7}} >Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist.</Text>

      <Text style={{fontSize:24, fontWeight:500}} >When would I need a cardiologist?</Text>
      <Text style={{fontSize:17, padding:7}} >If a person has symptoms of a heart condition, their physician may refer them to a cardiologist. Symptoms that can indicate a heart problem include:</Text>
      
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  shortness of breath </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  dizziness </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  chest pains </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  changes in heart rate or rhythm </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  high blood pressure </Text>

      <Text style={{fontSize:17, padding:7}} >A cardiologist can carry out tests for a heart murmur or an abnormal heart rhythm.
        They often treat patients who have had a heart attack, heart failure, or other heart problems. They help make decisions about heart surgery, heart catheterization, and angioplasty and stenting.
        Heart diseases that a cardiologist can help with include:</Text>
        <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  atherosclerosis </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  atrial fibrillation </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  arrhythmias </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  congenital heart disease </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  coronary heart disease </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  congestive heart disease </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  hypertension </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  pericarditis </Text>
      <Text style={{fontSize:17, padding:1, }}>{'\u2B24'}  ventricular tachycardia </Text>
      

      </ScrollView>
  )
}

export default CardioScreen

const styles = StyleSheet.create({})