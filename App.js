import { StatusBar } from 'expo-status-bar';
import { useState, useSyncExternalStore } from 'react';
import { StyleSheet, Text, TextInput, View, ViewBase } from 'react-native';

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0); 
  return (
    <View>
      <View>
      <Text style={styles.titleText}>MyCalculator</Text>
      <TextInput
        placeholder="1st Number"
        placeholderTextColor='#2A2F4F'
        onChangeText={setFirstNumber}
        keyboardType='numeric'
        style={styles.inputText}
      />

      <TextInput
         placeholder="1st Number"
         placeholderTextColor='#2A2F4F'
         onChangeText={setSecondNumber}
         keyboardType='numeric'
         style={styles.inputText}
      />
      <Text style={styles.result}>Result:</Text>
      <Text style={styles.textContainer}>Result</Text>
      </View>
      <View></View>
      {/*  */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  titleText:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    color:'#917FB3',
  },
  result:{
    fontSize:15,
    fontWeight:'bold',
    // textAlign:'center',
    color:'#917FB3',
    marginLeft:20
  },
  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FDE2F3',
    backgroundColor: '#FDE2F3',
    borderRadius: 20,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:15
  },
  textContainer: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FDE2F3',
    backgroundColor: '#FDE2F3',
    borderRadius:20,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
    textAlignVertical:'center'
  },
    
});
