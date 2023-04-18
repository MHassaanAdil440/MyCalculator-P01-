import { StatusBar } from "expo-status-bar";
import { useState, useSyncExternalStore } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const CustomButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const handlePress = () => {
  console.log('Button pressed');
};

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <View style = {styles.container}>
      <View style={{flex:0.05,backgroundColor:'#FDE2F3'}}>
        {/* <Text>Testing</Text>s */}
      </View>
      <View style = {{flex:0.4, }}>
        <Text style={styles.titleText}>MyCalculator</Text>
        <TextInput
          placeholder="1st Number"
          placeholderTextColor="#2A2F4F"
          onChangeText={setFirstNumber}
          keyboardType="numeric"
          style={styles.inputText}
        />

        <TextInput
          placeholder="1st Number"
          placeholderTextColor="#2A2F4F"
          onChangeText={setSecondNumber}
          keyboardType="numeric"
          style={styles.inputText}
        />
        <Text style={styles.result}>Result:</Text>
        <Text style={styles.textContainer}>Result</Text>
      </View>
      <View style = {{flex:0.55}}>
        <View style = {styles.buttonRow}>

        <CustomButton onPress={handlePress} title='+' style={styles.customButtonsOperators}/>
        <CustomButton onPress={handlePress} title='-' style={styles.customButtonsOperators}/>
        <CustomButton onPress={handlePress} title='/' style={styles.customButtonsOperators}/>
        <CustomButton onPress={handlePress} title='*' style={styles.customButtonsOperators}/>
        </View>

        <View style = {styles.buttonRow}>

        <CustomButton onPress={handlePress} title='1' style={styles.customButtonsNumbers}/>
        <CustomButton onPress={handlePress} title='2' style={styles.customButtonsNumbers}/>
        <CustomButton onPress={handlePress} title='3' style={styles.customButtonsNumbers}/>
        <CustomButton onPress={handlePress} title='4' style={styles.customButtonsNumbers}/>
        </View>

        <View style = {styles.buttonRow}>

        <CustomButton onPress={handlePress} title='5' style={styles.customButtonsNumbers}/>
        <CustomButton onPress={handlePress} title='6' style={styles.customButtonsNumbers}/>
        <CustomButton onPress={handlePress} title='7' style={styles.customButtonsNumbers}/>
        <CustomButton onPress={handlePress} title='8' style={styles.customButtonsNumbers}/>
        </View>

        <View style = {styles.buttonRow}>

        <CustomButton onPress={handlePress} title='9' style={styles.customButtonsNumbers}/>
        <CustomButton onPress={handlePress} title='0' style={styles.customButtonsNumbers}/>
        <CustomButton onPress={handlePress} title='.' style={styles.customButtonsNumbers}/>
        <CustomButton onPress={handlePress} title='=' style={styles.customButtonsNumbers}/>
        </View>

        

      </View>
      {/*  */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#917FB3",
  },
  result: {
    fontSize: 15,
    fontWeight: "bold",
    // textAlign:'center',
    color: "#917FB3",
    marginLeft: 20,
  },
  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#FEF8F8",
    backgroundColor: "#FEF8F8",
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
    borderColor: "#FEF8F8",
    backgroundColor: "#FEF8F8",
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: "center",
  },
  customButtonsNumbers:{
    height: 80,
    width: 70,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderColor: "#FDF4F5",
    backgroundColor: "#FDF4F5",
    borderRadius: 20,
    
  },
  customButtonsOperators:{
    height: 80,
    width: 70,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderColor: "#FDE2F3",
    backgroundColor: "#FDE2F3",
    borderRadius: 20,
    
  },
   buttonText: {
    color: 'black',
    fontSize: 20,
    // paddingVertical:'5',
    textAlign: 'center', // center the text
    fontWeight: 'bold', // make the text bold
  },
  buttonRow: {
    flexDirection: 'row', // display buttons horizontally
    flexWrap: 'wrap', // wrap buttons to next line if necessary
    justifyContent: 'space-between', // distribute buttons evenly across row
    width: '100%', // ensure the row takes up the full width of the container
    marginBottom: 10, // add some margin between rows
  },
});
