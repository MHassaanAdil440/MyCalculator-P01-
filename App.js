import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { useState, useSyncExternalStore } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const CustomButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};


export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState();

  const handlePressPlus = () => {
    const r = parseInt(firstNumber) + parseInt(secondNumber);
    setResult(r);
  };
  
  const handlePressMinus = () => {
    let r = firstNumber - secondNumber;
    setResult(r);
  };
  
  const handlePressMultiply = () => {
    let r = firstNumber * secondNumber;
    setResult(r);
  };
  
  const handlePressDivide = () => {
    let r = firstNumber / secondNumber;
    setResult(r);
  };

  const handleInputChangeFirst = (text) => {
    setFirstNumber(text);
  };

  const handleInputChangeSecond = (text) => {
    setSecondNumber(text);
  };
  return (
    // <TouchableWithoutFeedback onPress={()=>textInputRef.current.blur()}>

    <View style={styles.container}>
      <View style={{ flex: 0.05, backgroundColor: "#F9D949" }}>
        {/* <Text>Testing</Text>s */}
      </View>
      <View style={{ flex: 0.6 }}>
        <Text style={styles.titleText}>MyCalculator</Text>
        <TextInput
          placeholder="1st Number"
          placeholderTextColor="#2A2F4F"
          keyboardType='numeric'
          onChangeText={handleInputChangeFirst}
          // showSoftInputOnFocus='false'
          style={styles.inputText}
        />

        <TextInput
          placeholder="1st Number"
          placeholderTextColor="#2A2F4F"
          keyboardType='numeric'
          onChangeText={handleInputChangeSecond}
          // onFocus={()=>{Keyboard.dismiss()}}
          // showSoftInputOnFocus='false'
          style={styles.inputText}
        />
        <Text style={styles.result}>Result:</Text>
        <Text style={styles.textContainer}>{result}</Text>

        <View style={styles.buttonRow}>
          <CustomButton
            onPress={handlePressPlus}
            title="+"
            style={styles.customButtonsOperators}
          />
          <CustomButton
            onPress={handlePressMinus}
            title="-"
            style={styles.customButtonsOperators}
          />
          <CustomButton
            onPress={handlePressDivide}
            title="/"
            style={styles.customButtonsOperators}
          />
          <CustomButton
            onPress={handlePressMultiply}
            title="*"
            style={styles.customButtonsOperators}
          />
        </View>
      </View>

      {/*  */}
      <StatusBar style="auto" />
    </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFD93D",
  },
  result: {
    fontSize: 15,
    fontWeight: "bold",
    // textAlign:'center',
    color: "#FFD93D",
    marginLeft: 20,
  },
  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#F3E99F",
    backgroundColor: "#F3E99F",
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  textContainer: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#F3E99F",
    backgroundColor: "#F3E99F",
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: "center",
  },

  customButtonsOperators: {
    height: 80,
    width: 70,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderColor: "#F9D949",
    backgroundColor: "#F9D949",
    borderRadius: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    // paddingVertical:'5',
    textAlign: "center", // center the text
    fontWeight: "bold", // make the text bold
  },
  buttonRow: {
    flexDirection: "row", // display buttons horizontally
    flexWrap: "wrap", // wrap buttons to next line if necessary
    justifyContent: "space-between", // distribute buttons evenly across row
    width: "100%", // ensure the row takes up the full width of the container
    marginBottom: 10, // add some margin between rows
  },
});
