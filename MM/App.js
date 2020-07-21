import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Minha Média</Text>

      <TextInput style={styles.input} maxLength={4} keyboardType='decimal-pad' placeholder='Primeira Nota'/>
      <TextInput style={styles.input} maxLength={4} keyboardType='decimal-pad' placeholder='Segunda Nota'/>
      <TextInput style={styles.input} maxLength={4} keyboardType='decimal-pad' placeholder='Terceira Nota'/>
      <TextInput style={styles.input} maxLength={4} keyboardType='decimal-pad' placeholder='Quarta Nota'/>

      <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Text  style={styles.btnText} >Calcular Média</Text>
      </TouchableOpacity>

      <Text style={styles.resul} >Resultado</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'#E64A19',
    fontSize:45,
    padding:10,
    fontWeight:'bold'
  },
  input:{
    borderBottomWidth:2,
    textAlign:'center',
    marginTop:10,
    width:150,    
  },
  btn:{
    borderRadius:5,
    backgroundColor:'#E64A19',
    width:180,
    height:30,
    marginTop:10,
    justifyContent:'center'
  },
  btnText:{
    color:'#fff',
    textAlign:'center',    
  },
  resul:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:10
  }


});
