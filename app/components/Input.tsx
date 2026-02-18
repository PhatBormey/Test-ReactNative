import React, { useState } from 'react'
import { StyleSheet, TextInput, View,Text } from 'react-native'

function Input() {
  const [txt,setTxt]=useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='write something here'
        onChangeText={newText=>setTxt(newText)}
        defaultValue={txt}
        style={styles.txtIn}
      >
      </TextInput>
      <Text style={styles.txt}>
        {txt}
      </Text>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    
  },
  txtIn:{
    position:'fixed',
    justifyContent:'center',
    height:40,
    width:100,
    padding:10,
    borderWidth:1,
    marginHorizontal:8
  },
  txt:{
    margin:10,
    fontSize:42
  }
})
export default Input
